'use strict';

var templateLiteral = require('./../../main/ecma2015/template-literal'),
    expect = require('chai').expect;

describe('Template literals', function () {
    var room, cutlery, expected;

    before(function () {
        room = 'kitchen';
        cutlery = 'spoon';
        expected = 'im eating on kitchen with spoon';
    });

    context('Default Ecma script 2015 behaviour', function () {

        it('should interpolate variables into template literal', function (next) {
            expect(`im eating on ${room} with ${cutlery}`).to.be.equal(expected);
            next();
        });

        it('should tag template literal by function signature', function (next) {
            var stub = function (s, v1, v2) {
                    return {
                        strings: s,
                        interpolate1: v1,
                        interpolate2: v2
                    };
                },
                template1 = stub(`im eating on ${room} with ${cutlery}`),
                template2 = stub`im eating on ${room} with ${cutlery}`;

            expect(template1.strings).to.be.eql(expected);
            expect(template1.interpolate1).to.be.undefined;
            // TAG TEMPLATE LITERAL
            expect(template2.strings).to.be.eql(['im eating on ', ' with ', '']);
            expect(template2.interpolate1).to.be.equal('kitchen');
            expect(template2.interpolate2).to.be.equal('spoon');
            next();
        });
    });

    it('"getString", should interpolate tag template literal', function (next) {
        expect(templateLiteral.getString`im eating on ${room} with ${cutlery}`).to.equal(expected);
        next();
    });

    it('"getHtml", should interpolate tag template literal', function (next) {
        var badVariable = '<script>deleteEverything()</script>',
            expected = '<div>&lt;script&gt;deleteEverything()&lt;/script&gt;</div>';

        expect(templateLiteral.getHtml`<div>${badVariable}</div>`).to.equal(expected);
        next();
    });

});
