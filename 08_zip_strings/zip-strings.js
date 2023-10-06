function zipStrings(strA, strB) {
  // leerer String zum absbeischer der zipped resultate
  let combinedString = "";

  //länge des kürzeren Strings bestimmen
  const minLengthString = Math.min(strA.length, strB.length);

  //for loop für die einzelenen Chars in den Strings (kürzerer String)
  for (let i = 0; i < minLengthString; i++) {
    combinedString += strA[i] + strB[i];
  }

  //Verbliebene Chars von dem längeren String anhängen
  if (strA.length > strB.length) {
    combinedString += strA.slice(minLengthString);
  } else if (strB.length > strA.length) {
    combinedString += strB.slice(minLengthString);
  }

  return combinedString;
}
