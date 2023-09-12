let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: '“All our dreams can come true, if we have the courage to pursue them.” ',
    person: '—Walt Disney',

    },
    {
    quote: '“The secret of getting ahead is getting started.” ',
    person: '—Mark Twain',

    },
    {
    quote: '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”  ',
    person: '—Mary Kay Ash',

    }, {
    quote: '“The best time to plant a tree was 20 years ago. The second best time is now.” ',
        person:'―Chinese Proverb'
    },
    {
        quote: '“I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’” ',
        person:'—Leah Busque',
    }, {
        quote: '“Whatever you are, be a good one.”',
        person:'―Abraham Lincoln',
    }, {
        quote: '“Hustle in silence and let your success make the noise.”',
        person:'-unknown',
    },
    {
    quote: '“It is during our darkest moments that we must focus to see the light',
    person: '-Aristotle',

    }, {
    quote: 'Be yourself; everyone else is already taken. ',
        person:'-Oscar Wilde'
    },
    {
        quote: '"Do one thing every day that scares you." ',
        person:'-Babe Ruth',
    }, {
        quote: ' "The only impossible journey is the one you never begin."',
        person:'-Tony Robbins',
    }, {
        quote: '"Only a life lived for others is a life worthwhile."',
        person:'-Albert Einstein',
    },




]
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
