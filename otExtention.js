if (typeof OneTrust !== 'undefined' && typeof OneTrust.testLog === 'function') {
    OneTrust.testLog();
  } else {
    console.warn('OneTrust or testLog function is not available on this page.');
  }
  
