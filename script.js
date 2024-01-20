const rectangle = document.querySelector('.rectangle__script');
const square = document.querySelector('.square__script');

// Task 1

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    toString() {
        return `Прямоугольник с шириной ${this.width} и высотой ${this.height} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`;
    }
}

const rect = new Rectangle(18, 12);

// Task 2

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    toString() {
        return `Квадрат ${super.toString().split(' ').slice(1).join(' ')}`;
    }
}

const sq = new Square(12);

// in HTML

for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');
    const text = document.createElement('p');
    text.style.color = '#ffffff';
    const width = document.createElement('div');
    width.className = 'width';
    const height = document.createElement('div');
    height.className = 'height';
    const P = document.createElement('div');
    const S = document.createElement('div');
    if (i == 0) {
        text.innerText = rect.toString();

        div.style.width = `${38 * rect.width}px`;
        div.style.height = `${38 * rect.height}px`;
        div.style.backgroundColor = '#ffffff';

        width.innerText = `${rect.width} см`;
        height.innerText = `${rect.height} см`;
        P.innerText = `P = ${rect.getPerimeter()} см`;
        S.innerHTML = `S = ${rect.getArea()} см<sup>2</sup>`;

        div.append(width, height, P, S);
        rectangle.append(div, text);
    } else {
        text.innerText = sq.toString();

        div.style.width = `${38 * sq.width}px`;
        div.style.height = `${38 * sq.height}px`;
        div.style.backgroundColor = '#ffffff';

        width.innerText = `${sq.width} см`;
        height.innerText = `${sq.height} см`;
        P.innerText = `P = ${sq.getPerimeter()} см`;
        S.innerHTML = `S = ${sq.getArea()} см<sup>2</sup>`;

        div.append(width, height, P, S);
        square.append(div, text);
    }
}
