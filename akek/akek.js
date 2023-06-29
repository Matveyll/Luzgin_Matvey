var lastname=prompt('Введите ваше фамилию');
        var firstname=prompt('Введите ваше имя');
        var givenname=prompt('Введите ваше отчество');
        var age=prompt('Введите ваш возраст');
        var sex=confirm('Ваш пол - мужской?')?'мужской':'женский';
        var pension=(age>=60)?'да':'нет'; 
        alert ('ваше ФИО: '+lastname+' '+firstname+' '+givenname+'\n'+
        'ваш возраст в годах: '+age+'\n'+
        'ваш возраст в днях: '+(parseInt(age)*365)+'\n'+
        'через 5 лет вам будет: '+(parseInt(age)+5)+'\n'+
        'ваш пол: '+sex+'\n'+'вы на пенсии: '+pension)