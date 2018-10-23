var app = new Vue({
  el: '#app',
  data: {
    firstName: "Ya Chun",
    lastName: "Wang",
    description: "(I wish) Je suis datajournaliste à l'AFP et j'enseigne le code, le traitement, et la visualisation de données à Sciences Po.",
    photo: "DSC_0001.jpg",
    twitter: "YC_WANGstrollin",
    github: "YCWeresa",
    mail: "yachun.wang@sciencespo.fr",
    experiences: [{
      dateBegin: "2018",
      dateEnd: "Today",
      name: "Tencent.Co",
      title: "Reporter",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Été 2017",
      dateEnd: false,
      name: "RSF Taipei",
      title: "Intern journaliste",
      description: false
    }, {
      dateBegin: "2015",
      dateEnd: "2016",
      name: "Oglivy One Taipei",
      title: "Stagiaire et correspondant de presse",
      description: false
    }],
    formations: [{
      dateBegin: "2019",
      dateEnd: "2019",
      name: "Master Journalisme et des Affaires Internationales",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2017",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais, Mandarin, Français"],
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})