
 module.exports = (bookshelf) => {
	return bookshelf.model('Photo', {
		tableName: 'photos',
		users() {
			return this.belongsTo('User');   

		},
		albums() {
			return this.belongsToMany('Album');
		}
	},
    {
		async fetchById(id, fetchOptions = {}){
			return await new this ({id}).fetch(fetchOptions);
		}
	} 
	);

}
