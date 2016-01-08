module.exports = {
	checkLength: function (vector, fieldLength) {
		return (vector.length<=fieldLength);
	},

	checkLegalCharacters: function (vector, pattern) {
		if (typeof pattern === 'undefined') { return true; }
		if (vector.match(pattern)) { 
			return true; 
		} else { 
			return false; 
		}
	},

	checkVector: function (vector, fieldLength, pattern) {
		if (this.checkLength(vector, fieldLength)===false) { return false; }
		if (this.checkLegalCharacters(vector, pattern)===false) { return false; }
		return true;
	}
};