'use strict';

describe('Design patterns', function () {
    var user, nandoMacPro, nandoMackRetina,
        _ = require('lodash'),
        expect = require('chai').expect,
        decoratorMac = require('./../../../main/patterns/decorator/app.module.interface-validate-decorator'),
        decoratorUser = require('./../../../main/patterns/decorator/app.module.interface-decorator');

    context('decorator objects', function () {
        beforeEach(function () {
            user = decoratorUser.getUser({name: 'Fernando'});
        });

        it('should extend properties from instance', function (next) {
            expect(user).to.have.property('name', 'Fernando');
            user.remember();
            expect(user.say()).to.have.string('User: Fernando');

            user = decoratorUser.getUserGeolocated(user, {street: 'La Vileta', city: 'Palma de Mallorca'});
            user.remember();
            expect(user.say()).to.have.string('User: Fernando, La Vileta, Palma de Mallorca');
            next();
        });

        it('should throw error when try to decorate invalid prototype', function (next) {
            expect(_.partial(_.bind(decoratorUser.getUserGeolocated, decoratorUser), {})).to.throw(TypeError);
            next();
        });
    });

    context('decorator objects by interface', function () {
        beforeEach(function () {
            nandoMacPro = decoratorMac.getMackBookPro();
            nandoMackRetina = decoratorMac.getMackBookRetina();
        });

        it('should have a reference from object target', function (next) {
            expect(nandoMacPro)
                .to.have.property('macbook')
                .that.be.an.instanceof(decoratorMac.getMackbookConstructor);

            expect(nandoMackRetina)
                .to.have.property('macbook')
                .that.be.an.instanceof(decoratorMac.getMackbookConstructor);
            next();
        });

        it('should have a reference from methods and prototype extended behaviour', function (next) {
            expect(nandoMacPro)
                .and.to.have.property('interfaceMethods')
                .that.be.an.instanceof(Array)
                .that.deep.equals(['add500GBRam', 'add1TBRam', 'addRetina13', 'addRetina15']);

            expect(nandoMackRetina)
                .and.to.have.property('interfaceMethods')
                .that.be.an.instanceof(Array)
                .that.deep.equals(['duplicatePixelRatio', 'add500GBRam', 'add1TBRam']);
            next();
        });

        it('should not access methods from object target, outside interface declaration', function (next) {
            var mackBookMethodsList = _.pull(Object.getOwnPropertyNames(decoratorMac.getMackbookConstructor.prototype), 'constructor'),
                mackBookProNotAccessMethodsList = _.pullAll(_.clone(mackBookMethodsList), nandoMacPro.interfaceMethods),
                mackBookRetinaNotAccessMethodsList = _.pullAll(_.clone(mackBookMethodsList), nandoMackRetina.interfaceMethods),
                docoratorMackBookProMethods = _.pull(Object.getOwnPropertyNames(nandoMacPro.constructor.prototype), 'constructor'),
                docoratorMackBookRetinaMethods = _.pull(Object.getOwnPropertyNames(nandoMackRetina.constructor.prototype), 'constructor');

            expect(docoratorMackBookProMethods).to.not.include.members(mackBookProNotAccessMethodsList);
            expect(nandoMacPro.duplicatePixelRatio).to.not.exist;

            expect(docoratorMackBookRetinaMethods).to.not.include.members(mackBookRetinaNotAccessMethodsList);
            expect(nandoMackRetina.addRetina13).to.not.exist;
            expect(nandoMackRetina.addRetina15).to.not.exist;
            next();
        });

        it('should extend properties to object from decorator A', function (next) {
            /* jshint maxstatements:15 */
            expect(nandoMacPro.macbook).to.have.property('isPortable', true);
            expect(nandoMacPro.macbook).to.have.property('camera', '13 MGpx');
            expect(nandoMacPro.macbook).to.have.property('price', 1500);
            expect(nandoMacPro.macbook).to.have.property('screenSize', 12);
            expect(nandoMacPro.macbook).to.have.property('ram', 256);
            nandoMacPro.add500GBRam();
            nandoMacPro.addRetina15();
            expect(nandoMacPro.macbook).to.have.property('camera', '13 MGpx');
            expect(nandoMacPro.macbook).to.have.property('price', 2100);
            expect(nandoMacPro.macbook).to.have.property('screenSize', 15);
            expect(nandoMacPro.macbook).to.have.property('ram', 500);
            next();
        });

        it('should extend properties to object from decorator B', function (next) {
            /* jshint maxstatements:15 */
            expect(nandoMackRetina.macbook).to.have.property('price', 1500);
            expect(nandoMackRetina.macbook).to.have.property('camera', '13 MGpx');
            expect(nandoMackRetina.macbook).to.have.property('ram', 256);
            expect(nandoMackRetina.macbook).to.have.property('screenSize', 12);
            expect(nandoMackRetina.macbook).to.have.property('pixelRatio', 1.5);
            nandoMackRetina.duplicatePixelRatio();
            nandoMackRetina.add1TBRam();
            expect(nandoMackRetina.macbook).to.have.property('price', 1500 + 250 + 500 + 350);
            expect(nandoMackRetina.macbook).to.have.property('screenSize', 12 + 3);
            expect(nandoMackRetina.macbook).to.have.property('pixelRatio', 2);
            expect(nandoMackRetina.macbook).to.have.property('camera', '15 MGpx');
            expect(nandoMackRetina.macbook).to.have.property('ram', 256 + 100 + 278);
            next();
        });
    });
});
