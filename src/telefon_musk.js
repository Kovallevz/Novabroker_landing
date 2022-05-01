import IMask from 'imask';
var element = document.getElementById('phone');
var maskOptions = {
   mask: '+{373}(00)00-00-00'
};
var mask = IMask(element, maskOptions);