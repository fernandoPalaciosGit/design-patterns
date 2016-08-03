describe('Car Builder pattern', function () {
    beforeEach(function () {
        this.director = new CarDirector();
        this.opelAstraBuilder = new OpelAstraBuilder();
        this.nissanCascaisBuilder = new NissanCascaisBuilder();
    });

    afterEach(function () {
        delete this.director;
        delete this.opelAstraBuilder;
        delete this.nissanCascaisBuilder;
    });

    it('should create a Opel Astra', function () {
        assert.ok(true);
    });

    it('should create a Nissan Cascais', function () {
        assert.ok(true);
    });
});