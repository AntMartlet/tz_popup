document.addEventListener('DOMContentLoaded', function(){ 
  var arr = ["Пятерочка",
              "Строительный Рынок",
              "ТPЦ Пушкаревское Кольцо",
              "Пятерочка",
              "Стройбат ТД",
              "Заря",
              "Победа",
              "Строительный Рынок",
              "Пятерочка",
              "Заря",
              "Пятерочка",
              "Стройбат ТД",
              "Заря",
              "Победа",
              "Строительный Рынок",
              "Пятерочка",
              "Заря",
              "ТPЦ Пушкаревское Кольцо"];
  
 
  var ul = document.querySelector('ul.popup-choose__popup__content');
  var new_array = arr.map(function callback(currentValue, index) {
      ul.innerHTML +='<li><input id="elem'+ index +'" type="checkbox" class="checkbox" /><label for="elem'+ index +'"><div class="popup-checkbox"></div>'+ currentValue +'</label></li>';
  });
});
