/**
 * Created by lyy011lyy on 2016/8/15.
 */

var BORN_YEAR = 1989;
var currentDate = new Date();
var age = currentDate.getFullYear() - BORN_YEAR + 1;

var me={
    "name":"Yaoyao",
    "age": age
};

function me2() {
    this.name = "Yaoyao Lin";
    this.age = age;
}

