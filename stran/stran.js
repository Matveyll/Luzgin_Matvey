        var countrysH = {};
        function addCountry(countryName, capitalName) {
            countrysH[countryName] = capitalName;
        }

        function deleteCountry(countryName) {
            delete countrysH[countryName];
        }

        function getCountryInfo(countryName) {
            if (countryName in countrysH)
                return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
            else
                return 'нет информации о стране ' + countryName + '!';
        }
        function listCountrys() {
            var res = "";
            for (var CN in countrysH)
                res += '\n' + getCountryInfo(CN);
            return res;
        }

        function addCount() {
            countryName = prompt('Введите название страны');
            capitalName = prompt('Введите название столицы');
            addCountry(countryName, capitalName);
            console.log(countrysH);
        }

        function delCount () {
            countryName = prompt('Введите название страны');
            deleteCountry(countryName);
            console.log(countrysH);
        }

        function getInfo() {
            countryName = prompt('Введите название страны');
            getCountryInfo(countryName);
            console.log(getCountryInfo(countryName));
        }

        function getList() {
            listCountrys();
            console.log(listCountrys());
        }

