export const environment = {
  defaultLanguge: "VN", // language type: Eng | VN
  defaultUnit: "VN", // unit type: Eng | $

  //chi phí hủy
  cancelationCost: {
    VND: 5000,
    USD: 300,
  },
  // số tiền đặt cọc
  depositAmount: {
    VND: 5000,
    USD: 300,
  },
  excel: {
    // Url dẫn tới google sheet, chứa nhiều sheet dữ liệu liên quan
    Url: "https://docs.google.com/spreadsheets/d/1zIapvt2739A_rkmw8NvvNPkAbOKNg-A1sAj2j09uSFw",
    
    range: {
      // range: vùng dữ liệu cần lấy của sheet
      // gid: gid id của sheet cần lấy
      bookingSheet: "range=A1:O8&gid=1486602170",
      roomTypePriceSheet: "range=A1:E4&gid=1466780222",
      hourPriceSheet: "range=A1:C24&gid=598499578",
      QA: "range=A1:D20&gid=0",
    },
  },
};
