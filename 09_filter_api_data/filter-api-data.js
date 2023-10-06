function filterApiData(apiData, mandatoryKeys) {
  // filter methode zum erstellen eines neuen Objects welches alle "mandatory keys" enthält

  return apiData.filter((obj) => {
    // Check if every mandatory key is present in the object
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
}
