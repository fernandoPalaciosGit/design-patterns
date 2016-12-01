'use strict';

var getTemplateLiteral = require('./../../main/ecma2015/template-literal'),
    expect = require('chai').expect;

describe('Template literals', function () {
    var template;

    before(function () {
        template = getTemplateLiteral();
    });

    context('Default Ecma script 2015 behaviour', function () {
        var room, cutlery, badVariable, expectedString, expectedHtml;

        before(function () {
            room = 'kitchen';
            cutlery = 'spoon';
            badVariable = '<script>deleteEverything();</script>';
            expectedString = 'im eating on kitchen with spoon.';
            expectedHtml = '&lt;div&gt;&lt;script&gt;deleteEverything();&lt;/script&gt;&lt;/div&gt;';
        });

        it('should interpolate variables into template literal', function (next) {
            expect(`im eating on ${room} with ${cutlery}.`).to.be.equal(expectedString);
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
                template1 = stub(`im eating on ${room} with ${cutlery}.`),
                template2 = stub`im eating on ${room} with ${cutlery}.`;

            expect(template1.strings).to.be.eql(expectedString);
            expect(template1.interpolate1).to.be.undefined;
            // TAG TEMPLATE LITERAL
            expect(template2.strings).to.be.eql(['im eating on ', ' with ', '.']);
            expect(template2.interpolate1).to.be.equal('kitchen');
            expect(template2.interpolate2).to.be.equal('spoon');
            next();
        });

        it('"renderString", should interpolate tag template literal', function (next) {
            expect(template.renderString`im eating on ${room} with ${cutlery}.`).to.equal(expectedString);
            next();
        });

        it('"renderHtml", should interpolate tag template literal', function (next) {
            expect(template.renderHtml`<div>${badVariable}</div>`).to.equal(expectedHtml);
            next();
        });
    });

    context('should check sentinel with interpolated value', function () {
        var badVariable, expected;

        beforeEach(function () {
            badVariable = '<script>deleteEverything();</script>';
            expected = '&lt;div&gt;&lt;script&gt;deleteEverything();&lt;/script&gt;&lt;/div&gt;';
        });

        it('then ignore block', function (next) {
            expect(template.renderHtml`
                <div>${badVariable}</div>

                ${template.start(false)}
                <button>delete admin</button>
                ${template.end()}
            `).to.equal(expected);
            next();
        });

        it('then take into account block', function (next) {
            expected += '&lt;button&gt;delete admin&lt;/button&gt;';
            expect(template.renderHtml`
                <div>${badVariable}</div>

                ${template.start()}
                <button>delete admin</button>
                ${template.end()}
            `).to.equal(expected);
            next();
        });
    });

    it('should interpolate template with multiple lines', function (next) {
        var renderListPersons = (persons) => template.renderHtml`
                <h1>List of people</h1>
                <ul>
                    ${template.map(persons, (person) => template.render`
                        <li>
                            <h2>${person.name}</h2>
                            ${template.start(person.isAdmin)}
                            <button>delete admin</button>
                            ${template.end()}
                        </li>
                    `)}
                </ul>
            `,
            expected = [
                '&lt;h1&gt;List of people&lt;/h1&gt;',
                '&lt;ul&gt;',
                '&lt;li&gt;',
                '&lt;h2&gt;Fede&lt;/h2&gt;',
                '&lt;/li&gt;',
                '&lt;li&gt;',
                '&lt;h2&gt;Nando&lt;/h2&gt;',
                '&lt;button&gt;delete admin&lt;/button&gt;',
                '&lt;/li&gt;',
                '&lt;/ul&gt;'
            ].join('');

        expect(renderListPersons([
            { name: 'Fede', isAdmin: false },
            { name: 'Nando', isAdmin: true }
        ])).to.be.equal(expected);
        next();
    });
});
