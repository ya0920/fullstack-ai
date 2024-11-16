function Coder(name, age) {
    this.name = name;
    this.age = age;
    this.career = 'coder';
    this.work = ['写代码',  '改bug', '摸鱼']
}

function Product(name, age) {
    this.name = name;
    this.age = age;
    this.career = 'product';
    this.work = ['做需求', '催更', '订会议室']
}
function Factory(name, age, career){
    switch (career) {
        case 'coder':
            return new Coder(name, age)
        case 'product':
            return new Product(name, age)
    }
}