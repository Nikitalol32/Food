describe('/api/restaurants', () => {
	it('Возвращает статус 200', () => {
		cy.request('http://localhost:5540/api/restaurants')
			.then(({status}) => expect(status).to.eq(200))
	});
});
