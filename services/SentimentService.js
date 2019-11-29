const sentiment = require('sentiment');

class SentimentService {
    constructor() {
        this.map = new Map();
    }

    /**
     * Compute the "sentiment" for a given text and the associate the result for a given keyword.
     * @param token the keyword
     * @param text the text to analyze
     * @return the total score for the given keyword
     */
    analyze(token, text) {
        let res = sentiment(text);
        res.score
    }

    /**
     * Get the sentiment score for the given keyword
     * @param the keyword
     * @return the total score
     */
    score(token) {
    }
}

module.exports = SentimentService;
