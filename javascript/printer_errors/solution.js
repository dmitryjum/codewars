function printerError(s) {
    var errorCount = 0;
    var stringLength = s.length
    var colors = 'abcdefghijklm'
    for (var i = 0; i < stringLength; i++) {
      if (!colors.includes(s.charAt(i))) {
        errorCount++
      };
    };
    return errorCount + '/' + stringLength
}