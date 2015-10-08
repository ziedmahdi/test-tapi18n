LanguageOptions = { 
    lng: 'fr'
};


Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: TAPi18n.__("title", LanguageOptions),
    max: 200
  },
  author: {
    type: String,
    label: TAPi18n.__("author", LanguageOptions)
  },
}));


