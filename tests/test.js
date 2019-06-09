'use strict'
const getSign = require('./../lib/index').getSign;
const getZodiac = require('./../lib/index').getZodiac;

// const horoscope = require('./../lib/index');
const test = require('tape');

// data to test against
let borderDates = {
	"Janeiro": [
		[19, 'Capricornio'],
		[20, 'Aquario']
	],
	"Fevereiro": [
		[18, 'Aquario'],
		[19, 'Peixes']
	],
	"Março": [
		[20, 'Peixes'],
		[21, 'Aries']
	],
	"Abril": [
		[19, 'Aries'],
		[20, 'Touro']
	],
	"Maio": [
		[20, 'Touro'],
		[21, 'Gêmeos']
	],
	"Junho": [
		[20, 'Gêmeos'],
		[21, 'Câncer']
	],
	"Julho": [
		[22, 'Câncer'],
		[23, 'Leão']
	],
	"Agosto": [
		[22, 'Leão'],
		[23, 'Virgem']
	],
	"Setembro": [
		[22, 'Virgem'],
		[23, 'Libra']
	],
	"Outubro": [
		[22, 'Libra'],
		[23, 'Escorpião']
	],
	"Novembro": [
		[21, 'Escorpião'],
		[22, 'Sagitario']
	],
	"Dezembro": [
		[21, 'Sagitario'],
		[22, 'Capricornio']
	]
}

// hard-coded array of months in number format for getSign testing
let monthNums = {
	"Janeiro": 1,
	"Fevereiro": 2,
	"Março": 3,
	"Abril": 4,
	"Maio": 5,
	"Junho": 6,
	"Julho": 7,
	"Agosto": 8,
	"Setembro": 9,
	"Outubro": 10,
	"Novembro": 11,
	"Dezembro": 12,
}

// hard-coded array of zodiac animal years for getZodiac testing
let animalsToTest = {
	'Rato': [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
	'Boi': [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
	'Tigre': [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
	'Coelho': [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
	'Dragão': [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
	'Cobra': [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
	'Cavalo': [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
	'Cabra': [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
	'Macaco': [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
	'Galo': [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
	'Cachorro': [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
	'Porco': [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
}

// getSign tests
for (let month in borderDates) {
	test('check both signs in ' + month, (newTest) => {
		newTest.plan(2)
		let monthNum = monthNums[month]
		let firstTestSign = borderDates[month][0][1]
		let firstTestDay = borderDates[month][0][0]
		newTest.equal(getSign({month: monthNum, day: firstTestDay}), firstTestSign)
		let secondTestSign = borderDates[month][1][1]
		let secondTestDay = borderDates[month][1][0]
		newTest.equal(getSign({month: monthNum, day: secondTestDay}), secondTestSign)
	})
}

// getZodiac tests
for (let sign in animalsToTest) {
	test('check 9 years of zodiac: ' + sign, newTest => {
		newTest.plan(9)
		animalsToTest[sign].forEach(year => {
			let zodiacAnimal = getZodiac(year)
			newTest.equal(zodiacAnimal, sign);
		})
	})
}
