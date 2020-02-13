const baseQuery = require('./baseQuery')

// metodo para listar as series
class Series{
    lista(){
        // ta entre parenteses pq é função, retora uma nova promessa
        return baseQuery('SELECT * FROM series')

    }
    //insere dados na tabela
    insere(serie){
        return baseQuery ('INSERT INTO series SET ? ', serie);

    }
    //atualiza
    atualiza(serie){
        return baseQuery(' UPDATE series SET ? where id = ? ', [serie, serie.id]); 
    }
    buscaPorId(id){

         return baseQuery(' select * from series where id = ?', id);
        
    }

    delete(id){

        return  baseQuery('delete from series where id = ?', id);
    }

        
}
module.exports =  Series;