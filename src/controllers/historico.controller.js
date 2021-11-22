const mapper = require("automapper-js");
const { HistoryDto } = require("../dtos");

class HistoryController {
  constructor({ HistoryService, Email, socketIo }) {
    this._historyService = HistoryService;
    this._mapper = mapper;
    this._email = Email;
    this._socket = socketIo;
  }

  async getDate(req, res){
    const { date, type } = req.query;
    let history = await this._historyService.getDate(date, type);
    history = await this._mapper(HistoryDto, history);
    return res.json({data : {date, history}})
  }

  async getHistory(req, res){
    let history = await this._historyService.getAll();
    history = await this._mapper(HistoryDto, history);
    return res.json({data : history})
  }

  async createHistory(req, res){
    const history = req.body;
    if(!history?.usuario)
      history.usuario = res.user.nombre;
    let newHistory = await this._historyService.create(history);
    newHistory = await this._mapper(HistoryDto, newHistory);
    //Debera enviar correo a todos los usuarios del sistema
    const conf = {email : res.user.email, nombre : res.user.nombre, area: "Area privada", subject : "Alerta", type : "alert"}
    //await this._email.sendEmail(conf);

    this._socket.emit();
    return res.json({message : newHistory})
  }
/* 
  //Obtiene todos los productos en el Stock
  async getStock(req, res) {
    let stock = await this._stockService.getAll();
    stock = await this.mapperStock(stock);

    return res.json({
      payload: stock,
    });
  }

  //Obtiene el stock segun su id
  async getStockId(req, res) {

    const { id } = req.params;
    let stock = await this._stockService.get(id);
    [stock] = await this.mapperStock([stock]);
    
    return res.json({
      payload: stock,
    });
  }  

  //Obtiene los productos del stock segun la categoria
  async getStockCategoria(req, res) {

    const { id } = req.params;
    let stock = await this._stockService.getCategoria(id);
    stock = await this.mapperStock(stock);
    
    return res.json({
      payload: stock,
    });
  }
  
  //Busca un producto determinado por el nombre y que exista en un stock
  async getFindProduct(req, res) {
    const { name } = req.query;
    let stock = await this._stockService.getFindProductAll(name);
    stock = await this.mapperStock(stock);

    return res.json({
      payload: stock,
    });
  }

  //Crea un nuevo stock segun un producto
  async createStock(req, res) {

    const { body } = req;
    const createdStock = await this._stockService.create(body);
    const stock = mapper(StockDto, createdStock);

    return res.status(201).send({
      payload: stock,
    });
  }

  //Mapear las lineas del stock
  async mapperStock(stock) {
    await Promise.all(
      stock.map(async (stock) => {
        stock.Producto_idProduct = await this._productoService.get(
          stock.Producto_idProduct
        );
      })
    );
    return stock;
  }*/
} 

module.exports = HistoryController;
