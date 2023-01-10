import db from "../db";

class Beer {
  constructor(brand, name, alcohol, style, yeast) {
    this.brand = brand;
    this.name = name;
    this.alcohol = alcohol;
    this.style = style;
    this.yeast = yeast;
  }

  save() {
    let sql = `
    INSERT INTO beers(brand, name, alcohol, style, yeast) VALUES(
      '${this.brand}',
      '${this.name}',
      '${this.alcohol}',
      '${this.style}',
      '${this.yeast}'
    )
    `;

    return db.execute(sql);
  }

  static saveMultiple(arr) {
    let values = "";
    arr.forEach((el, _id) => {
      if (_id == arr.length - 1) {
        values +=
          "" +
          `("${el.brand}","${el.name}","${el.alcohol}","${el.style}","${el.yeast}")`;
      } else {
        values +=
          "" +
          `("${el.brand}","${el.name}","${el.alcohol}","${el.style}","${el.yeast}"),`;
      }
    });
    // console.log("values: ", values);
    let sql = `INSERT INTO beers(brand, name, alcohol, style, yeast) 
    VALUES${values}`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM beers;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM beers WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM beers WHERE id=${id};`;

    return db.execute(sql);
  }
}

export default Beer;
