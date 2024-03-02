class Employ{

    setEmployDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this. phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name;
    }

    getEmpid(){
        return this.id;
    }

    getEmpPhoneNo(){
        return this.phoneNo;
    }

}

let emp1 = new Employ();

emp1.setEmployDetails('Jonas', 1001, 0234656845);
console.log(emp1.getEmpName(), emp1.getEmpPhoneNo(), emp1.getEmpid());