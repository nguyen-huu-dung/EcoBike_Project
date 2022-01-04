class  Configs {
    
    // config database
    public static HOST : string = "127.0.0.1";
    public static USER : string = "root";
    public static PASSWORD : string = "";
    public static DATABASE : string = "ecobike";
    public static PORT : number = 5050;

    //
    public static VIEW_SPLASH_PATH = "SplashScreen";
    public static VIEW_HOME_PATH = "HomeScreen";
    public static VIEW_PARKING_PATH = "DetailsParkingScreen";
    public static VIEW_CONFIRM_RENT_PATH = "ConfirmRentBikeScreen";
    public static VIEW_PAYMENT_PATH = "PaymentScreen";
    public static VIEW_RENT_PATH = "RentBikeScreen";
    public static VIEW_RETURN_PATH = "ReturnBikeScreen";
    public static VIEW_RESULT_PATH = "ResultScreen";
}

export { Configs };