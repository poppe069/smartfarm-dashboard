function dateTime(_date) {
  let date2 = /* @__PURE__ */ new Date();
  try {
    if (_date !== null) {
      date2 = new Date(_date);
    }
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(date2).replace(",", "");
  } catch (error) {
    console.log(error);
  }
}
function numberFormat(_number) {
  const numberFormatter = new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  try {
    return numberFormatter.format(Number(_number));
  } catch (error) {
    console.log(error);
  }
}
export {
  dateTime as d,
  numberFormat as n
};
