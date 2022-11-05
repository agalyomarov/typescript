enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membership_reverse = Membership[2];
console.log(membership);
console.log(membership_reverse);

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social_media = SocialMedia.INSTAGRAM;
console.log(social_media);

enum Example {
  A,
  B,
  C,
}

enum Example_2 {
  A = "A",
  B = "B",
}
console.log(Example.A);
console.log(Example[2]);

console.log(Example_2["A"]);
console.log(Example_2.B);
