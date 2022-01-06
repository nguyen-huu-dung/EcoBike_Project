interface UserServiceInterface {

    checkUserRented(userId: string);

    updateUser(bikeId : string, transactionId : string);

    getRentBikeByUserId(userId : string);

}

export { UserServiceInterface };