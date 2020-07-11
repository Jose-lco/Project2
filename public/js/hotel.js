function findHotel(cityFromHTML) {
  event.preventDefault();
  //  const cityInput = $("#cityInput").val();
  console.log(cityFromHTML);
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=" +
      cityFromHTML +
      "&countryName=US",
    method: "GET",
    headers: {
      "x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
      "x-rapidapi-key": "ac0cc4b87bmshe5adb909971ec52p1b3325jsn21adde0a4552"
    }
  };

  $.ajax(settings).done(response => {
    const hotelName = response.name;
    const hotelLink = response.link;
    console.log(hotelName);
    console.log(hotelLink);
    const hotelHeading = $("<h5 id='hotelHeader'>").text(hotelName);
    const bookingButton = $(
      "<a class='waves-effect waves-light btn' href=" + hotelLink + ">"
    ).text("Book Hotel");
    $("#hotelHolder").append(hotelHeading);
    $("#hotelHolder").append(bookingButton);
  });
}

$("#searchHotelBtn").on("click", () => {
  const cityInput = $("#cityInput").val();
  findHotel(cityInput);
});
