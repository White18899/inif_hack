import { audioEngine } from './audio.js';
import { STONES } from './stonesData.js';

export function initRegistrationModule() {
  const modalRegister = document.getElementById('modal-register');
  const modalSuccess = document.getElementById('modal-success');
  const btnCloseRegister = document.getElementById('btn-close-register');
  const btnCloseSuccess = document.getElementById('btn-close-success');
  const btnNavRegister = document.getElementById('btn-nav-register');
  const btnWieldStone = document.getElementById('btn-wield-stone');
  const formReg = document.getElementById('form-registration');

  const regDomainBadge = document.getElementById('reg-domain-badge');
  const domainCards = document.querySelectorAll('.domain-radio-card');
  const sizeRadios = document.querySelectorAll('input[name="teamSize"]');
  const member4Card = document.getElementById('member-4-card');
  const m4Inputs = member4Card ? member4Card.querySelectorAll('input') : [];

  const qrImg = document.getElementById('qr-img');
  const qrAmountText = document.getElementById('qr-amount-text');
  const totalFeeDisplay = document.getElementById('total-fee-display');
  const regScreenshot = document.getElementById('reg-screenshot');
  const ocrBanner = document.getElementById('ocr-banner');
  const ocrBody = document.getElementById('ocr-body');
  const ocrIcon = document.getElementById('ocr-icon');
  const ocrTitle = document.getElementById('ocr-title');
  const regUtr = document.getElementById('reg-utr');
  const regPayPhone = document.getElementById('reg-pay-phone');
  const utrCheckBadge = document.getElementById('utr-check-badge');
  const regErrorMsg = document.getElementById('reg-error-msg');
  const btnSubmit = document.getElementById('btn-submit-registration');
  const regSpinner = document.getElementById('reg-spinner');

  let isReceiptVerified = false;
  let verifiedReceiptUtr = null;
  let isUtrUnique = false;
  let utrDebounceTimer = null;

  function isDummyUtr(utr) {
    if (!utr || typeof utr !== 'string') return true;
    const clean = utr.trim();
    if (/^(\d)\1+$/.test(clean)) return true; // 000000000000, 111111111111
    const dummies = ['123456789012', '12345678901', '012345678901', '987654321098', '112233445566', '998877665544', '123456123456'];
    return dummies.includes(clean);
  }

  // 1. OPEN MODAL
  function openModal(stoneId = 'mind') {
    if (!modalRegister) return;
    modalRegister.classList.add('is-open');
    modalRegister.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Auto-select radio button
    const radio = document.querySelector(`input[name="domain"][value="${stoneId}"]`);
    if (radio) {
      radio.checked = true;
      updateDomainBadge(stoneId);
    }

    // Ensure QR code and fee match active team size
    const activeSizeRadio = document.querySelector('input[name="teamSize"]:checked');
    const currentSize = activeSizeRadio ? parseInt(activeSizeRadio.value, 10) : 3;
    if (qrImg) {
      qrImg.src = currentSize === 4 ? '/4mem.png' : '/3mem.png';
    }
    const currentFee = currentSize * 349;
    if (qrAmountText) qrAmountText.textContent = `PAY ₹${currentFee.toLocaleString('en-IN')}`;
    if (totalFeeDisplay) totalFeeDisplay.textContent = `₹${currentFee.toLocaleString('en-IN')}`;

    audioEngine.playChime(580);
  }

  // 2. CLOSE MODAL
  function closeModal() {
    if (!modalRegister) return;
    modalRegister.classList.remove('is-open');
    modalRegister.setAttribute('aria-hidden', 'true');
    // Restore overflow if timeline unlocked or default
    if (document.body.classList.contains('timeline-unlocked')) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  function updateDomainBadge(stoneId) {
    const stone = STONES.find(s => s.id === stoneId) || STONES[0];
    if (regDomainBadge) {
      regDomainBadge.textContent = `DOMAIN: ${stone.name} // ${stone.domain}`;
      regDomainBadge.style.color = stone.colorHex;
    }
    domainCards.forEach(card => {
      const isMatch = card.getAttribute('data-domain') === stoneId;
      card.classList.toggle('selected', isMatch);
    });
  }

  // Trigger from "WIELD THIS STONE"
  if (btnWieldStone) {
    btnWieldStone.addEventListener('click', () => {
      const activeId = btnWieldStone.getAttribute('data-stone-id') || 'mind';
      audioEngine.playClick();
      openModal(activeId);
    });
  }

  // Trigger from Header "REGISTER SQUAD"
  if (btnNavRegister) {
    btnNavRegister.addEventListener('click', () => {
      audioEngine.playClick();
      openModal('mind');
    });
  }

  // Close triggers
  if (btnCloseRegister) {
    btnCloseRegister.addEventListener('click', () => {
      audioEngine.playClick();
      closeModal();
    });
  }

  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', () => {
      audioEngine.playClick();
      modalSuccess?.classList.remove('is-open');
      modalSuccess?.setAttribute('aria-hidden', 'true');
    });
  }

  // Close on backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === modalRegister) closeModal();
    if (e.target === modalSuccess) {
      modalSuccess.classList.remove('is-open');
      modalSuccess.setAttribute('aria-hidden', 'true');
    }
  });

  // Domain Radio change listener
  domainCards.forEach(card => {
    card.addEventListener('click', () => {
      const stoneId = card.getAttribute('data-domain');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      updateDomainBadge(stoneId);
      audioEngine.playStoneChime(stoneId);
    });
  });

  // Team Size Toggle listener (3 or 4 members, ₹349 per member)
  sizeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      audioEngine.playClick();
      const size = parseInt(radio.value, 10);
      const fee = size * 349;

      if (qrImg) {
        qrImg.src = size === 4 ? '/4mem.png' : '/3mem.png';
      }
      if (qrAmountText) qrAmountText.textContent = `PAY ₹${fee.toLocaleString('en-IN')}`;
      if (totalFeeDisplay) totalFeeDisplay.textContent = `₹${fee.toLocaleString('en-IN')}`;

      if (size === 4) {
        if (member4Card) member4Card.style.display = 'block';
        m4Inputs.forEach(input => input.setAttribute('required', 'true'));
      } else {
        if (member4Card) member4Card.style.display = 'none';
        m4Inputs.forEach(input => {
          input.removeAttribute('required');
          input.value = '';
        });
      }
    });
  });

  // Real-time UTR Uniqueness Check
  async function verifyUtrUniqueness(utrValue) {
    const clean = (utrValue || '').trim();
    if (!clean || clean.length < 6) {
      if (utrCheckBadge) {
        utrCheckBadge.textContent = '';
        utrCheckBadge.className = 'utr-status-badge';
      }
      isUtrUnique = false;
      return;
    }

    // 1. Detect dummy / fake UTR numbers (e.g. 123456789012, 000000000000)
    if (isDummyUtr(clean)) {
      isUtrUnique = false;
      if (utrCheckBadge) {
        utrCheckBadge.textContent = '❌ Fake / Test UTR!';
        utrCheckBadge.className = 'utr-status-badge error';
      }
      setInputError(regUtr, 'Obvious dummy/fake UTR rejected. Please enter your authentic 12-digit transaction reference number.');
      return;
    }

    // 2. Reject if no valid receipt has been uploaded or verified
    if (!isReceiptVerified) {
      isUtrUnique = false;
      if (utrCheckBadge) {
        utrCheckBadge.textContent = '❌ Upload verified receipt first';
        utrCheckBadge.className = 'utr-status-badge error';
      }
      setInputError(regUtr, 'Please upload a verified UPI payment receipt first.');
      return;
    }

    // 3. Reject if typed UTR does not match the reference number detected in the receipt
    if (verifiedReceiptUtr && clean !== verifiedReceiptUtr) {
      isUtrUnique = false;
      if (utrCheckBadge) {
        utrCheckBadge.textContent = '❌ Mismatch with receipt!';
        utrCheckBadge.className = 'utr-status-badge error';
      }
      setInputError(regUtr, `UTR does not match the transaction reference detected in your receipt (${verifiedReceiptUtr}).`);
      return;
    }

    try {
      const res = await fetch(`/api/verify-utr?utr=${encodeURIComponent(clean)}`);
      const data = await res.json();
      if (data.exists) {
        isUtrUnique = false;
        if (utrCheckBadge) {
          utrCheckBadge.textContent = '❌ Already Registered!';
          utrCheckBadge.className = 'utr-status-badge error';
        }
        setInputError(regUtr, 'This UTR has already been registered with another team.');
      } else {
        isUtrUnique = true;
        clearInputError(regUtr);
        if (utrCheckBadge) {
          utrCheckBadge.textContent = '✓ Verified & Unique';
          utrCheckBadge.className = 'utr-status-badge success';
        }
      }
    } catch (e) {
      console.warn('UTR verify network warning:', e);
      isUtrUnique = true;
    }
  }

  if (regUtr) {
    regUtr.addEventListener('input', (e) => {
      clearTimeout(utrDebounceTimer);
      utrDebounceTimer = setTimeout(() => {
        verifyUtrUniqueness(e.target.value);
      }, 300);
    });
  }

  // Helper to load Tesseract OCR engine dynamically on demand
  async function loadTesseractOCR() {
    if (window.Tesseract) return window.Tesseract;
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[src*="tesseract"]');
      if (existing) {
        if (window.Tesseract) return resolve(window.Tesseract);
        existing.addEventListener('load', () => resolve(window.Tesseract));
        existing.addEventListener('error', () => reject(new Error('Failed to load OCR engine')));
        return;
      }
      const s = document.createElement('script');
      s.src = '/tesseract/tesseract.min.js';
      s.onload = () => resolve(window.Tesseract);
      s.onerror = () => reject(new Error('Failed to load OCR engine'));
      document.head.appendChild(s);
    });
  }

  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB Limit
  const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

  // Payment Screenshot Upload & Client AI OCR Telemetry Extraction
  if (regScreenshot) {
    regScreenshot.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      // 1. Enforce 20MB Upload Limit
      if (file.size > MAX_FILE_SIZE) {
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        showError(`❌ File size (${sizeMb} MB) exceeds the 20MB limit. Please upload an image under 20MB.`);
        regScreenshot.value = '';
        isReceiptVerified = false;
        verifiedReceiptUtr = null;
        if (ocrBanner) ocrBanner.style.display = 'none';
        return;
      }

      // 2. Enforce Image File Type
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        showError(`❌ Invalid file format (${file.type || 'unknown'}). Please upload a PNG, JPG, or WEBP receipt screenshot.`);
        regScreenshot.value = '';
        isReceiptVerified = false;
        verifiedReceiptUtr = null;
        if (ocrBanner) ocrBanner.style.display = 'none';
        return;
      }

      // 3. Display Scanning Telemetry
      if (ocrBanner) {
        ocrBanner.style.display = 'flex';
        ocrBanner.className = 'ocr-detection-banner scanning';
        if (ocrIcon) ocrIcon.textContent = '🔍';
        if (ocrTitle) ocrTitle.textContent = 'Scanning Receipt With AI OCR...';
        if (ocrBody) ocrBody.innerHTML = `<span class="ocr-scanning">Reading image pixels for 12-digit UPI UTR...</span>`;
      }

      try {
        const Tesseract = await loadTesseractOCR();
        if (!Tesseract) throw new Error('OCR not available');

        // Create local worker with zero CORS / cross-origin issues
        const worker = await Tesseract.createWorker('eng', 1, {
          workerPath: '/tesseract/worker.min.js',
          corePath: '/tesseract/tesseract-core.wasm.js',
          langPath: '/tesseract',
          gzip: true,
          logger: m => {
            if (m.status === 'recognizing text' && m.progress) {
              const pct = Math.round(m.progress * 100);
              if (ocrBody) ocrBody.innerHTML = `<span class="ocr-scanning">Reading receipt text: ${pct}%...</span>`;
            }
          }
        });

        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('OCR Timeout')), 15000));
        const recognizePromise = worker.recognize(file);
        const result = await Promise.race([recognizePromise, timeoutPromise]);
        await worker.terminate();

        const rawText = (result?.data?.text || '').trim();
        const lower = rawText.toLowerCase();

        // 1. Detect explicit non-payment content (e.g. NPTEL, student portals, code errors, github)
        const nonPaymentKeywords = [
          'nptel', 'exam_form', 'candidate_login', 'noc candidate', 'trying to access array offset',
          'notice: trying to access', 'undefined index', 'fatal error', 'stack trace', 'github.com',
          'localhost', 'stackoverflow', 'vscode', 'syntax error', 'login/index.php'
        ];
        const isExplicitNonPayment = nonPaymentKeywords.some(kw => lower.includes(kw));

        // 2. Detect authentic UPI payment keywords
        const paymentKeywords = [
          'upi', 'gpay', 'google pay', 'phonepe', 'paytm', 'bhim', 'cred',
          'paid to', 'payment to', 'payment of', 'paid', 'payment successful',
          'transaction successful', 'payment completed', 'transfer successful',
          'transferred to', 'credited to', 'debited from', 'utr', 'rrn',
          'upi ref', 'upi transaction id', 'ref no', 'reference no', 'transaction id',
          'txn id', 'inr', '₹', 'state bank', 'hdfc', 'icici', 'axis', 'canara', 'kotak',
          'bank', 'banking'
        ];
        const paymentMatches = paymentKeywords.filter(kw => lower.includes(kw));

        // 3. Extract 12-digit UTR numbers
        const labeledMatch = rawText.match(/(?:utr|upi\s*ref(?:erence)?|rrn|txn\s*(?:id|no)?|transaction\s*(?:id|ref|no)?)[\s:.-]*([0-9]{12})\b/i);
        const twelveDigits = rawText.match(/\b([0-9]{12})\b/g) || [];

        let detectedUtr = null;
        if (labeledMatch && labeledMatch[1] && !isDummyUtr(labeledMatch[1])) {
          detectedUtr = labeledMatch[1];
        } else if (twelveDigits.length > 0) {
          detectedUtr = twelveDigits.find(n => !isDummyUtr(n)) || null;
        }

        // ==========================================
        // OUTCOME A: Explicit Non-Payment or Zero Payment Content
        // ==========================================
        if (isExplicitNonPayment || (paymentMatches.length === 0 && !detectedUtr)) {
          isReceiptVerified = false;
          verifiedReceiptUtr = null;
          regScreenshot.classList.add('is-invalid');
          if (regUtr) {
            regUtr.value = '';
            clearInputError(regUtr);
          }
          if (utrCheckBadge) {
            utrCheckBadge.textContent = '❌ Invalid screenshot!';
            utrCheckBadge.className = 'utr-status-badge error';
          }
          if (ocrBanner) {
            ocrBanner.className = 'ocr-detection-banner error';
            if (ocrIcon) ocrIcon.textContent = '❌';
            if (ocrTitle) ocrTitle.textContent = 'Receipt Verification FAILED';
            if (ocrBody) {
              ocrBody.innerHTML = `<strong>Invalid Receipt:</strong> This image was identified as a non-payment screenshot ${isExplicitNonPayment ? '(portal/exam error)' : '(no UPI transaction details)'}. You must upload your genuine PhonePe, Google Pay, or Paytm receipt to register.`;
            }
          }
          audioEngine.playChime(220);
          showError('❌ Verification Failed: The uploaded image is NOT a UPI payment receipt. Registration is blocked.');
          return;
        }

        // ==========================================
        // OUTCOME B: Genuine Payment Receipt with Verified 12-Digit UTR
        // ==========================================
        if (detectedUtr) {
          isReceiptVerified = true;
          verifiedReceiptUtr = detectedUtr;
          regScreenshot.classList.remove('is-invalid');
          if (regUtr) {
            regUtr.value = detectedUtr;
            clearInputError(regUtr);
            verifyUtrUniqueness(detectedUtr);
          }
          if (ocrBanner) {
            ocrBanner.className = 'ocr-detection-banner success';
            if (ocrIcon) ocrIcon.textContent = '✅';
            if (ocrTitle) ocrTitle.textContent = 'Receipt & 12-Digit UTR VERIFIED';
            if (ocrBody) {
              ocrBody.innerHTML = `Genuine UPI receipt verified! Detected 12-digit UTR: <strong style="color:#00ff88; font-size:0.85rem;">${detectedUtr}</strong>. Please confirm it matches your payment app.`;
            }
          }
          audioEngine.playChime(720);
          return;
        }

        // ==========================================
        // OUTCOME C: Payment Receipt Detected, but 12-Digit UTR Blurry
        // ==========================================
        if (paymentMatches.length >= 1) {
          isReceiptVerified = true;
          verifiedReceiptUtr = null; // manual entry allowed for authentic receipt
          regScreenshot.classList.remove('is-invalid');
          if (ocrBanner) {
            ocrBanner.className = 'ocr-detection-banner warning';
            if (ocrIcon) ocrIcon.textContent = '🔍';
            if (ocrTitle) ocrTitle.textContent = 'Payment Receipt Confirmed (Manual UTR)';
            if (ocrBody) {
              ocrBody.innerHTML = `Authentic payment receipt confirmed! The 12-digit UTR text was slightly low-contrast. Please manually type the exact 12-digit UTR below.`;
            }
          }
        }
      } catch (err) {
        console.error('OCR processing error:', err);
        isReceiptVerified = false;
        if (ocrBanner) {
          ocrBanner.className = 'ocr-detection-banner error';
          if (ocrIcon) ocrIcon.textContent = '⚠️';
          if (ocrTitle) ocrTitle.textContent = 'Receipt Verification Incomplete';
          if (ocrBody) {
            ocrBody.innerHTML = `Could not verify receipt authenticity. Please ensure you upload a clear screenshot of your PhonePe, Google Pay, or Paytm receipt.`;
          }
        }
      }
    });
  }

  // Validation & Formatting Helpers
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  function normalizePhone(phone) {
    if (!phone) return '';
    let digits = phone.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
    return digits;
  }

  function isValidEmail(email) {
    return typeof email === 'string' && EMAIL_REGEX.test(email.trim());
  }

  function isValidPhone(phone) {
    const digits = normalizePhone(phone);
    return digits.length >= 10 && digits.length <= 14;
  }

  function setInputError(inputEl, msg) {
    if (!inputEl) return;
    inputEl.classList.add('is-invalid');
    let parent = inputEl.parentElement;
    let hint = parent.querySelector('.field-error-hint');
    if (!hint) {
      hint = document.createElement('span');
      hint.className = 'field-error-hint';
      parent.appendChild(hint);
    }
    hint.textContent = msg;
  }

  function clearInputError(inputEl) {
    if (!inputEl) return;
    inputEl.classList.remove('is-invalid');
    const hint = inputEl.parentElement.querySelector('.field-error-hint');
    if (hint) hint.remove();
  }

  // Real-time verify participant email or phone against database
  async function checkParticipantConflictAsync(field, value, inputEl, role) {
    if (!value) return;
    try {
      const param = field === 'email' ? `email=${encodeURIComponent(value.trim().toLowerCase())}` : `phone=${encodeURIComponent(value)}`;
      const res = await fetch(`/api/verify-participant?${param}`);
      const data = await res.json();
      if (data.exists) {
        setInputError(inputEl, `❌ Already registered in team '${data.teamName}' (${data.teamId})`);
        audioEngine.playChime(220);
      }
    } catch (e) {
      // Offline or network error: silent
    }
  }

  // Attach real-time validation listeners to input fields
  const trackedInputs = [
    { id: 'reg-leader-email', type: 'email', role: 'Team Leader' },
    { id: 'reg-leader-phone', type: 'phone', role: 'Team Leader' },
    { id: 'reg-m2-email', type: 'email', role: 'Member 02' },
    { id: 'reg-m2-phone', type: 'phone', role: 'Member 02' },
    { id: 'reg-m3-email', type: 'email', role: 'Member 03' },
    { id: 'reg-m3-phone', type: 'phone', role: 'Member 03' },
    { id: 'reg-m4-email', type: 'email', role: 'Member 04' },
    { id: 'reg-m4-phone', type: 'phone', role: 'Member 04' },
  ];

  trackedInputs.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;

    el.addEventListener('input', () => {
      clearInputError(el);
    });

    el.addEventListener('blur', () => {
      const val = el.value.trim();
      if (!val) return;

      if (item.type === 'email') {
        if (!isValidEmail(val)) {
          setInputError(el, 'Invalid email address (e.g. name@domain.com)');
          return;
        }
        checkParticipantConflictAsync('email', val, el, item.role);
      } else if (item.type === 'phone') {
        if (!isValidPhone(val)) {
          setInputError(el, 'Enter a valid 10-digit mobile number');
          return;
        }
        checkParticipantConflictAsync('phone', val, el, item.role);
      }
    });
  });

  // Form Submit Handler
  if (formReg) {
    formReg.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (regErrorMsg) regErrorMsg.style.display = 'none';

      // Clear any prior field errors
      document.querySelectorAll('.form-input.is-invalid').forEach(clearInputError);

      const teamName = document.getElementById('reg-team-name')?.value.trim();
      const college = document.getElementById('reg-college')?.value.trim();
      const preferredDomain = document.querySelector('input[name="domain"]:checked')?.value || 'mind';
      const techStack = document.getElementById('reg-tech-stack')?.value?.trim() || '';
      const teamSize = document.querySelector('input[name="teamSize"]:checked')?.value || '3';
      const leaderName = document.getElementById('reg-leader-name')?.value.trim();
      const leaderPhone = document.getElementById('reg-leader-phone')?.value.trim();
      const leaderEmail = document.getElementById('reg-leader-email')?.value.trim();
      const teamPassword = document.getElementById('reg-team-password')?.value;
      const paymentUtr = regUtr?.value.trim();
      const paymentPhone = regPayPhone?.value.trim() || leaderPhone;
      const screenshotFile = regScreenshot?.files[0];

      // 1. Mandatory Core Validation
      if (!teamName) {
        showError('Please enter your Squad / Team Name.');
        document.getElementById('reg-team-name')?.focus();
        return;
      }
      if (!college) {
        showError('Please enter your College or Institution name.');
        document.getElementById('reg-college')?.focus();
        return;
      }
      if (!leaderName) {
        showError('Please enter Leader Full Name.');
        document.getElementById('reg-leader-name')?.focus();
        return;
      }
      if (!isValidEmail(leaderEmail)) {
        showError('Please enter a valid Leader Email address (e.g. name@domain.com).');
        const el = document.getElementById('reg-leader-email');
        setInputError(el, 'Invalid email format');
        el?.focus();
        return;
      }
      if (!isValidPhone(leaderPhone)) {
        showError('Please enter a valid 10-digit Leader Mobile Number.');
        const el = document.getElementById('reg-leader-phone');
        setInputError(el, 'Enter a valid 10-digit number');
        el?.focus();
        return;
      }
      if (!teamPassword || teamPassword.length < 6) {
        showError('Team Password must be at least 6 characters (used for Leader Portal login).');
        document.getElementById('reg-team-password')?.focus();
        return;
      }

      // 2. Validate Member 2
      const m2Name = document.getElementById('reg-m2-name')?.value.trim();
      const m2Email = document.getElementById('reg-m2-email')?.value.trim();
      const m2Phone = document.getElementById('reg-m2-phone')?.value.trim();
      if (!m2Name) {
        showError('Member 02 Full Name is required.');
        document.getElementById('reg-m2-name')?.focus();
        return;
      }
      if (!isValidEmail(m2Email)) {
        showError('Member 02 has an invalid email format.');
        const el = document.getElementById('reg-m2-email');
        setInputError(el, 'Invalid email format');
        el?.focus();
        return;
      }
      if (!isValidPhone(m2Phone)) {
        showError('Member 02 requires a valid 10-digit phone number.');
        const el = document.getElementById('reg-m2-phone');
        setInputError(el, 'Enter a valid 10-digit number');
        el?.focus();
        return;
      }

      // 3. Validate Member 3
      const m3Name = document.getElementById('reg-m3-name')?.value.trim();
      const m3Email = document.getElementById('reg-m3-email')?.value.trim();
      const m3Phone = document.getElementById('reg-m3-phone')?.value.trim();
      if (!m3Name) {
        showError('Member 03 Full Name is required.');
        document.getElementById('reg-m3-name')?.focus();
        return;
      }
      if (!isValidEmail(m3Email)) {
        showError('Member 03 has an invalid email format.');
        const el = document.getElementById('reg-m3-email');
        setInputError(el, 'Invalid email format');
        el?.focus();
        return;
      }
      if (!isValidPhone(m3Phone)) {
        showError('Member 03 requires a valid 10-digit phone number.');
        const el = document.getElementById('reg-m3-phone');
        setInputError(el, 'Enter a valid 10-digit number');
        el?.focus();
        return;
      }

      const members = [
        { name: m2Name, email: m2Email, phone: m2Phone },
        { name: m3Name, email: m3Email, phone: m3Phone }
      ];

      // 4. Validate Member 4 if Team Size is 4
      if (teamSize === '4') {
        const m4Name = document.getElementById('reg-m4-name')?.value.trim();
        const m4Email = document.getElementById('reg-m4-email')?.value.trim();
        const m4Phone = document.getElementById('reg-m4-phone')?.value.trim();
        if (!m4Name) {
          showError('Member 04 Full Name is required for 4-member squads.');
          document.getElementById('reg-m4-name')?.focus();
          return;
        }
        if (!isValidEmail(m4Email)) {
          showError('Member 04 has an invalid email format.');
          const el = document.getElementById('reg-m4-email');
          setInputError(el, 'Invalid email format');
          el?.focus();
          return;
        }
        if (!isValidPhone(m4Phone)) {
          showError('Member 04 requires a valid 10-digit phone number.');
          const el = document.getElementById('reg-m4-phone');
          setInputError(el, 'Enter a valid 10-digit number');
          el?.focus();
          return;
        }
        members.push({ name: m4Name, email: m4Email, phone: m4Phone });
      }

      // 5. Intra-Team Duplicate Checks (No duplicate emails or phones in squad)
      const allParticipants = [
        { role: 'Team Leader', email: leaderEmail.toLowerCase(), phone: normalizePhone(leaderPhone), el: document.getElementById('reg-leader-email'), phoneEl: document.getElementById('reg-leader-phone') },
        { role: 'Member 02', email: m2Email.toLowerCase(), phone: normalizePhone(m2Phone), el: document.getElementById('reg-m2-email'), phoneEl: document.getElementById('reg-m2-phone') },
        { role: 'Member 03', email: m3Email.toLowerCase(), phone: normalizePhone(m3Phone), el: document.getElementById('reg-m3-email'), phoneEl: document.getElementById('reg-m3-phone') },
      ];
      if (teamSize === '4') {
        allParticipants.push({
          role: 'Member 04',
          email: members[2].email.toLowerCase(),
          phone: normalizePhone(members[2].phone),
          el: document.getElementById('reg-m4-email'),
          phoneEl: document.getElementById('reg-m4-phone')
        });
      }

      const seenEmails = new Map();
      for (const p of allParticipants) {
        if (seenEmails.has(p.email)) {
          const prev = seenEmails.get(p.email);
          const msg = `Duplicate email '${p.email}' in squad (${prev} and ${p.role}). Every member must have a unique email.`;
          showError(msg);
          setInputError(p.el, 'Duplicate email in squad');
          p.el?.focus();
          return;
        }
        seenEmails.set(p.email, p.role);
      }

      const seenPhones = new Map();
      for (const p of allParticipants) {
        if (seenPhones.has(p.phone)) {
          const prev = seenPhones.get(p.phone);
          const msg = `Duplicate mobile number in squad (${prev} and ${p.role}). Every member must have their own unique phone number.`;
          showError(msg);
          setInputError(p.phoneEl, 'Duplicate phone in squad');
          p.phoneEl?.focus();
          return;
        }
        seenPhones.set(p.phone, p.role);
      }

      // 6. Payment & Receipt Verification
      if (!screenshotFile) {
        showError('Please upload your payment confirmation screenshot.');
        document.getElementById('reg-screenshot')?.focus();
        return;
      }

      if (screenshotFile.size > MAX_FILE_SIZE) {
        const sizeMb = (screenshotFile.size / (1024 * 1024)).toFixed(1);
        showError(`Payment screenshot file size (${sizeMb} MB) exceeds the 20MB limit. Please upload an image under 20MB.`);
        document.getElementById('reg-screenshot')?.focus();
        return;
      }

      if (!isReceiptVerified) {
        showError('❌ Registration Blocked: Uploaded screenshot could not be verified as a genuine UPI payment receipt. Please upload your PhonePe, Google Pay, or Paytm receipt.');
        document.getElementById('reg-screenshot')?.focus();
        return;
      }

      if (!paymentUtr) {
        showError('Please enter your 12-digit payment bank UTR / transaction number.');
        document.getElementById('reg-utr')?.focus();
        return;
      }

      const cleanUtr = paymentUtr.trim();
      if (isDummyUtr(cleanUtr)) {
        showError(`❌ Fake / Dummy UTR: '${cleanUtr}' rejected. Please enter your authentic 12-digit UPI transaction reference number.`);
        document.getElementById('reg-utr')?.focus();
        return;
      }

      if (verifiedReceiptUtr && cleanUtr !== verifiedReceiptUtr) {
        showError(`❌ UTR Mismatch: Entered UTR '${cleanUtr}' does not match the transaction reference in your uploaded receipt ('${verifiedReceiptUtr}').`);
        document.getElementById('reg-utr')?.focus();
        return;
      }

      const UTR_REGEX = /^([0-9]{12}|[A-Za-z0-9]{10,22})$/;
      if (!UTR_REGEX.test(cleanUtr)) {
        showError('Invalid UTR format. Standard UPI Transaction ID / UTR must be 12 digits (found in your GPay / PhonePe / Paytm receipt).');
        document.getElementById('reg-utr')?.focus();
        return;
      }

      // Build FormData payload
      const formData = new FormData();
      formData.append('teamName', teamName);
      formData.append('college', college);
      formData.append('preferredDomain', preferredDomain);
      formData.append('techStack', techStack);
      formData.append('teamSize', teamSize);
      formData.append('teamPassword', teamPassword);
      formData.append('leaderName', leaderName);
      formData.append('leaderPhone', leaderPhone);
      formData.append('leaderEmail', leaderEmail);
      formData.append('paymentUtr', paymentUtr);
      formData.append('paymentPhone', paymentPhone);
      formData.append('members', JSON.stringify(members));
      formData.append('paymentScreenshot', screenshotFile);

      // UI Loading state
      if (btnSubmit) btnSubmit.disabled = true;
      if (regSpinner) regSpinner.style.display = 'inline-block';

      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          body: formData,
        });

        const resData = await response.json();

        if (!response.ok || !resData.success) {
          throw new Error(resData.error || 'Registration failed. Please verify your details.');
        }

        // Successful registration!
        closeModal();
        audioEngine.playConvergenceChord();

        // Populate Success Modal
        const sucTeamId = document.getElementById('suc-team-id');
        const sucTeamName = document.getElementById('suc-team-name');
        const sucDomain = document.getElementById('suc-domain');
        const sucEmail = document.getElementById('suc-email');
        const sucAmount = document.getElementById('suc-amount');

        if (sucTeamId) sucTeamId.textContent = resData.team.id;
        if (sucTeamName) sucTeamName.textContent = resData.team.teamName;
        if (sucDomain) sucDomain.textContent = `${resData.team.preferredDomain.toUpperCase()} STONE`;
        if (sucEmail) sucEmail.textContent = resData.team.leaderEmail;
        if (sucAmount) sucAmount.textContent = `₹${resData.team.amount.toLocaleString('en-IN')}`;

        if (modalSuccess) {
          modalSuccess.classList.add('is-open');
          modalSuccess.setAttribute('aria-hidden', 'false');
        }

        formReg.reset();
        if (ocrBanner) ocrBanner.style.display = 'none';
        if (qrImg) qrImg.src = '/3mem.png';
        if (qrAmountText) qrAmountText.textContent = 'PAY ₹1,047';
        if (totalFeeDisplay) totalFeeDisplay.textContent = '₹1,047';
        if (member4Card) member4Card.style.display = 'none';
        m4Inputs.forEach(input => {
          input.removeAttribute('required');
          input.value = '';
        });

      } catch (err) {
        showError(err.message);
      } finally {
        if (btnSubmit) btnSubmit.disabled = false;
        if (regSpinner) regSpinner.style.display = 'none';
      }
    });
  }

  function showError(msg) {
    if (regErrorMsg) {
      regErrorMsg.textContent = msg;
      regErrorMsg.style.display = 'block';
      audioEngine.playChime(220); // alert tone
    }
  }

  // Setup FAQ Accordion Toggles
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      audioEngine.playClick();
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
  });

  // Setup Portals Dropdown Toggle
  const btnPortals = document.getElementById('btn-portals');
  const portalsMenu = document.getElementById('portals-menu');
  if (btnPortals && portalsMenu) {
    btnPortals.addEventListener('click', (e) => {
      e.stopPropagation();
      portalsMenu.classList.toggle('is-visible');
      audioEngine.playClick();
    });

    document.addEventListener('click', (e) => {
      if (!btnPortals.contains(e.target) && !portalsMenu.contains(e.target)) {
        portalsMenu.classList.remove('is-visible');
      }
    });
  }

  // Setup Nav Links smooth scrolling
  const navLinks = document.querySelectorAll('.hud-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      audioEngine.playClick();
      const targetId = link.getAttribute('href').substring(1);
      if (targetId === 'showcase-section') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          document.body.classList.remove('timeline-unlocked');
        }, 400);
        return;
      }

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        // Unlock timeline body scroll
        if (!document.body.classList.contains('timeline-unlocked')) {
          document.body.classList.add('timeline-unlocked');
        }
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      }
    });
  });
}
