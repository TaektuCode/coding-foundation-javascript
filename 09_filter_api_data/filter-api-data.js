function filterApiData(apiData, mandatoryKeys) {
  // filter methode zum erstellen eines neuen Objects welches alle "mandatory keys" enthält

  return apiData.filter((obj) => {
    // checken ob jeder mandatoryKey vorhanden ist.
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
}
