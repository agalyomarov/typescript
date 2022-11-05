var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membership_reverse = Membership[2];
console.log(membership);
console.log(membership_reverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social_media = SocialMedia.INSTAGRAM;
console.log(social_media);
var Example;
(function (Example) {
    Example[Example["A"] = 0] = "A";
    Example[Example["B"] = 1] = "B";
    Example[Example["C"] = 2] = "C";
})(Example || (Example = {}));
var Example_2;
(function (Example_2) {
    Example_2["A"] = "A";
    Example_2["B"] = "B";
})(Example_2 || (Example_2 = {}));
console.log(Example.A);
console.log(Example[2]);
console.log(Example_2["A"]);
console.log(Example_2.B);
