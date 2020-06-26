class Formatter {
  formatCurrency = (value, decimals=4, symbol="$") => {
    // Format numeric values to currency, will return the value of 'number' if
    // the value is not numeric.
    if (!isNaN(value)){
      let float = parseFloat(value).toFixed(decimals);
      if (float > 0) {
        return ( symbol + float );
      } else if (float < 0) {
        return ( "-" + symbol + Math.abs(float) );
      };
    }
    return ( value );
  }
}

export default Formatter;
