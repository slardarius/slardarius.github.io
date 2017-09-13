/*
 * @CreateTime: Sep 13, 2017 9:31 PM
 * @Author: Artem
 * @Contact: justtalkabout2@gmail.com
 * @Last Modified By: undefined
 * @Last Modified Time: Sep 13, 2017 9:54 PM
 * @Description: LearnJS
 *
 * =-=

/* Класс */
var MyClass = function() {

    var Name = ' '; 
    var LastName = ' ';
    var closeSetHuman = function (Ntemp, Ltemp) {
        Name = Ntemp;
        LastName = Ltemp;
    };
    this.setHuman = function(Ntemp, Ltemp){
        closeSetHuman(Ntemp, Ltemp);
    };
    this.getHuman = function() {
        console.log('Ваше имя: ' + Name + '\nВаша фамилия: ' + LastName);
    };
    /* Полиморфизм */
    this.talk = function(){
        console.log('Тра-ля-ля, я все знаю.');
    };
};
var Student = function () {
    var profile = ' ';
    var closeSetProfile = function(Profile) {
        profile = Profile;
    };
    this.setProfile = function(Profile) {
        closeSetProfile(Profile);
    };
    this.getProfile = function() {
        console.log('Профиль студента: ' + profile);
    };
    /* Полиморфизм */
    this.talk = function(){
        console.log('Ура, мы косим ленту!');
    }
};

/* Наследование */
var FirstClass = new MyClass();
Student.prototype = FirstClass;
var student = new Student();
student.setHuman('Artem', 'Zapaschikov');
student.setProfile('Программист');
student.getHuman();
student.getProfile();
student.talk();
