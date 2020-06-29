class Formatter {
  formatCurrency = (value, decimals=4, symbol="$") => {
    // Format numeric values to currency, will return the value of 'number' if
    // the value is not numeric.
    if (!isNaN(value)){
      let float = parseFloat(value);
      let unsignedFloat = Math.abs(float).toFixed(decimals);
      let parts = unsignedFloat.toString().split(".");
      // Regex double look ahead assertion.
      //  Positive assertion finds each point in a string with 3 digits after it.
      //  Negative assertion makes rue that it is an exact multiple of 3 digits.
      // This regex pattern does not account for decimal places, and therefore
      //    decimals must be split.
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let formatted = parts.join(".");
      let prefix = "";
      if (!(float >= 0)) {
        prefix = "-"
      }
      return ( prefix + symbol + formatted)
    }
    return ( value );
  }
}

export default Formatter;
