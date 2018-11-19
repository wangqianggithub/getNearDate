function getNearDate(n){
        var currYear = new Date().getFullYear();
        var currMonth = new Date().getMonth()+1;

        var nMonth = n%12;
        var final = {};
        var finalMonth = null;
        if((currMonth+nMonth) > 12){
            finalMonth = (currMonth+nMonth)-12;
        }
        if((currMonth+nMonth) <= 12 && (currMonth+nMonth) >= 1){
            finalMonth = currMonth+nMonth;
        }
        if((currMonth+nMonth) <= 0){
            finalMonth = (currMonth+nMonth)+12;
        }


        var finalYear = null;
        if(n > 0){
            if((currMonth+n)/12 > 1 ){
                if(((currMonth+Math.abs(n))/12)%1 === 0){
                    finalYear = currYear + Math.floor((currMonth+Math.abs(n))/12) - 1;
                }else{
                    finalYear = currYear + Math.floor((currMonth+Math.abs(n))/12);
                }
            }else{
                finalYear = currYear;
            }
        }else{
            if(currMonth > Math.abs(n)){
                finalYear = currYear;
            }else{
                if(((Math.abs(n) - currMonth)/12) % 1 === 0){
                    finalYear = currYear - Math.ceil((Math.abs(n) - currMonth)/12)-1;
                }else{
                    finalYear = currYear - Math.ceil((Math.abs(n) - currMonth)/12);
                }

            }
        }

        final.y = finalYear;
        final.m = finalMonth;
        console.log(final);
    }

    getNearDate(-15);
