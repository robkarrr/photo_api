module.exports = (bookshelf) => {
	return bookshelf.model('Album', {
		tableName: 'albums',
		users() {
			return this.belongsTo('User');
		},

        photos() {
            return this.belongsToMany('Photo');
        }
	}, 
    {
		async fetchById(id, fetchOptions = {}){
			return await new this ({id}).fetch(fetchOptions);
		}
	} 
	);


}
