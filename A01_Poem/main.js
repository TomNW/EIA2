let subject = ["Beethoven", "Biggie", "Mozart", "2pac",];
let predicate = ["ruft", "wohnt bei", "hasst", "fürchtet"];
let object = ["PSV Eindhoven", "Dracula", "Schule", "Fallobst"];
for (let index = subject.length; index >= 1; index--) {
    getVerse(subject, predicate, object);
}
function getVerse(_subject, _predicate, _object) {
    let verse = "";
    let x = Math.floor(Math.random() * _subject.length);
    let y = Math.floor(Math.random() * _predicate.length);
    let z = Math.floor(Math.random() * _object.length);
    let randomSubject = _subject.splice(x, 1);
    let randomPredicate = _predicate.splice(y, 1);
    let randomObject = _object.splice(z, 1);
    verse += randomSubject[0] + " " + randomPredicate[0] + " " + randomObject[0];
    console.log(verse);
}
//# sourceMappingURL=main.js.map