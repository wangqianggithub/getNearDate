function getNearDate(n){
        var currYear = new Date().getFullYear();
            var currMonth = new Date().getMonth()+1;

            var nMonth = n%12;
            var final = {};

            //获取月份
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


            //获取年份
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

            //获取当月多少天
            var finalDays = null;
            if(finalMonth == 1 || finalMonth == 3 || finalMonth == 5 || finalMonth == 7 || finalMonth == 8 || finalMonth == 10 || finalMonth == 12){
                finalDays = 31;
            }else if(finalMonth == 2){
                finalDays = 28;
            }else{
                finalDays = 30;
            }

            final.y = finalYear;
            final.m = finalMonth;
            final.days = finalDays;
            return final;
    }

    //获取前15个月的年份，月份
    getNearDate(-15);

    //获取后5个月的年份，月份
    getNearDate(5);
