var stuff = [
  ['Dwyneed', 'SMS a human who will talk you out of purchases', false],
  ['Watercoolr', 'Pop culture updates to keep up with your informed coworkers', false],
  ['Pinebox', 'Birchbox for morticians', false],
  ["You're Probably Not Dying",  'Chrome plugin that redirects WebMD traffic to /r/aww', false],
  ["Morekat", 'Hire watchers to up your Meerkat statistics', false],
  ['DickStarter', 'Crowdfund whaling voyages', false],
  ["Clickab.ly", 'A web tool to help journalists remove information from headlines', false],
  ['Keuritos', 'Keurig for burrito filling', false],
  ['Streamless', 'On-demand DVD delivery', false],
  ['Thrones Scoreboard', 'Real-time Game of Thrones updates pushed to Apple Watch', false],
  ['Pettr', 'Connects lonely animals with people to pet them', false],
  ['ClutterCasher', 'Storage service that eBays things you haven’t asked for in awhile', false],
  ['InCase by Amazon', 'Recommendation engine sends you things it predicts you want', false],
  ['SweepUnder', 'Service to hide your apartment clutter on short notice', false],
  ['Lush', 'Amazon Dash for boxed wine', false],
  ['Soapsy', 'Scrub mean tweets about a company when you send them a resume', false],
  ['Parenting Helicopter', 'A livestreaming drone that surveils your teen', false],
  ['Marathon', 'Strava for Netflix powerusers', false],
  ['ScaleFindr', 'Identify the right KPIs by finding metrics that sound really big', false],
  ['WatchBoard', 'A wearable keyboard for smartwatches (by Microsoft)', false],
  ['WatchMore', 'A wearable second screen for your Apple Watch', false],
  ['StubHub for GrubHub', 'Flip your delivery', false],
  ['Auf', "Disables your phone's display and blocks all incoming messages", false],
  ['Monetize.me', 'Share your $cashtag, BTC address, PayPal and more', false],
  ['CrowdTaker', 'Aggregates reactions and informs you of your opinion on the news', false],
  ['Cannt', 'Generates last-minute excuses to get out of plans', false],
  ['Stüul',  'A tall, elegant chair for people with standing desks', false],
  ['Slock', 'Like Slack, but secure', false],
  ['Credditor', 'Automatically post source in comments when your content is posted on Reddit', false],
  ['Crammr', 'Beautiful tool for automating adoption of your brand messaging', false],
  ['APPS by TOMS', 'For every app you buy, one is sent to a village', false],
  ['BaeWatch', 'Sends a notification whenever your partner likes their ex’s selfie', false],
  ['Synonymo.us', 'Rephrases your app idea as "Uber for X" or "Tinder for Y"', false],
  ['FlaskRabbit', 'On-demand covert liquor delivery', false],
  ['DeListicle', ' Translate listicles to normal long-form essays', false],
  ['Slacker', 'Slack plugin that auto-replies "brb phone" during work hours', false],
  ['Snapkat', 'Tweet live video, but like, only for teens and marketers', false],
  ['WeWorkTomorrow', 'A coworking space with no desks', false],
  ['RantStormer', 'Copy and paste a blogpost to chop it into numbered tweets', false],
  ['Fauxffeur', 'Lifelike driver statue for the front seat of your self-driving car', false],
  ['Soylrig', 'Keurig for Soylent', false],
  ['FaceFeed', 'Uses an algorithm to generate content and shares it', false],
  ['iSweariDid', 'Tweets about how hard you worked out today, no matter what', false],
  ['SolitAIR', "3D print files for Microsoft's classic Solitaire game IRL", false],
  ['Uber Your Enemies Glitter', 'Send glitter, for 2-10x as much on nights and weekends', false],
  ['EggSquirt', 'Keurig for caviar', false],
  ['Meerkat', 'A small African carnivoran belonging to the mongoose family', false],
  ['Skullscription', 'Monthtly disposable helmets for CitiBikers', false],
  ['Miser', 'An OkCupid companion tool that invests the money you save by no-showing', false],
  ['Maybook', 'RSVPs "Maybe" to every Facebook event invite', false],
  ['TiffSkipper', 'Temporarily deactivates your Facebook until November 9, 2016', false],
  ['Spoofify.fm', 'Automatically scrobbles every Pitchfork BNM selection for cred', false],
  ['Teen Text', 'An elegant, dad-friendly app that translates emoji to English', false],
  ['CrapRabbit', "Marketplace for contractors to pick up your dog's poop", false],
  ['Swerpes', 'An unobtrusive, iOS compatible STD testing kit for Tinder users', false],
  ['TieLocker','Automatically sends a tie every month directly to your storage space', false],
  ['DeskNest', 'A rollable nap pad that fits under your desk', false],
 

  ['Newscombinator', 'Like Google-News, but for hackers', 'newscombinator'],
  ['Meer-katalytics', 'Complete analytics for all Meerkats', 'meer-katalytics'],
  ['4 Minute Workout', "The world's fastest full body workout in just 4 minutes", '4-minute-workout'],
  ['Pug A Day', 'Send a friend 100 days of Pug pictures', 'pug-a-day'],
  ['Pick Up, Knock Down', 'Get a compliment and an insult from a stranger', 'pick-me-up-knock-me-down'],
  ['TreadDesk', 'Walk while you work', 'treaddesk'],
  ['Wrte.io', 'Email with a paywall. Charge for reading your email.', 'wrte-io'],
  ['DystopiaTracker', 'Explore predictions about the future and their realizations', 'dystopiatracker'],
  ['alibi.', 'Verify your story with passive geo tracking and Touch ID', 'alibi-2'],
  ['Dreeps', "A game that plays itself because you're too busy", 'dreeps'],
  ['Hushbook', 'Tinder for unfriending on Facebook', 'hushbook'],
  ['Slater', 'Schedule your Slack messages now, post them later', 'slater-by-convergely'],
  ['Blindfold', 'Siri for sex. Your digital foreplay assistant.', 'blindfold'],
  ['Flinch', 'Staring contest with strangers', 'flinch'],
  ['Ship Snow, Yo', 'We Ship Snow To Anyone in the US', 'ship-snow-yo'],
  ['Hoffice', "Cowork at someone's home", 'hoffice'],
  ['Hotels By Day', 'Experience a great hotel by day without paying for the night', 'hotels-by-day'],
  ['Gutsy', 'Find out what your friends truly think of you', 'gutsy'],
  ['Wevorce', 'Streamline the divorce process online', 'wevorce'],
  ['Rise', 'All-you-can-fly, private air travel membership', 'rise-5'],
  ['Dreaming With Jeff', 'Sleep better with the sound of Jeff Bridges', 'dreaming-with-jeff'],
  ['Am I Going Down?', 'Analyzes the chance of your flight crashing.', 'am-i-going-down'],
  ['Toothpick', "Calculate your tip based on the server's gender", 'toothpick'],
  ['Nudifier', 'Make people in photos look faux naked.', 'nudifier'],
  ['Invisible Boyfriend', 'Finally, a boyfriend your family can believe in.', 'invisible-boyfriend'],
  ['Self-Destructing Book', '24 hours to read a book before it self-destructs', 'self-destructing-book'],
  ['Sailo', 'Airbnb for boats', 'sailo'],
  ['Rejection Therapy', 'A game to conquer fear by getting rejected', 'rejection-therapy'],
  ['Be My Eyes', 'Lend your eyes to the blind', 'be-my-eyes-2'],
  ['Ship Your Enemies Glitter', 'Send glitter to the people that deserve it', 'ship-your-enemies-glitter'],
  ['Love Actualized', 'App for falling in love', 'love-actualized'],
  ['Vibease', "World's first wearable smart vibrator", 'vibease'],
  ['Hotel My Phone', "Borrow a friend's phone & use it as your own.", 'hotel-my-phone'],
  ['Listen to Twitter', 'Convert the sentiment of any topic into a unique melody', 'listen-to-twitter'],
  ['Pay with a Tweet', 'Sell your product for the price of a tweet', 'pay-with-a-tweet'],
  ['Blade', 'Helicopter ride sharing', 'blade'],
  ['gitr', 'Tinder for developers', 'girt'],
  ['Wonker', 'User-generated explanations on complex current events', 'wonker'],
  ['Make It Rain', 'Random gifs when you get paid via Stripe', 'make-it-rain'],
  ['Where have you cried?', 'Opened-sourced map of where people have publicly cried', 'where-have-you-cried'],
  ['Slackroulette', 'Chat with Slackers', 'slackroulette'],
  ['What Color Is It?', 'See the hex color for every second of the day', 'what-color-is-it'],
  ['Hello Santa', 'Video Chat Live with Santa!', 'hello-santa'],
  ['Stormy', 'Twitter Tweet Storms, made easy', 'stormy'],
  ['Futurism', 'Product Hunt for news about the future', 'futurism'],
  ['Likecreeper', "Randomly hit like on a friend's horrifyingly old instagram", 'likecreeper'],
  ['Bobler', 'Record 36 sec podcasts', 'bobler'],
  ['Stamp Yo Face!', 'Get your own custom-made selfie stamp', 'stamp-yo-face'],
  ['Yo B*tch', 'Yo app by Aaron Paul', 'yo-b-tch'],
  ['No CAPTCHA reCAPTCHA', "Update to CAPTCHA just asks if you're robot", 'no-captcha-recaptcha'],
  ['Plague', 'Spread content like a virus', 'plague'],
  ['Endangered Sounds Museum', 'Nostalgic sounds from the past', 'endangered-sounds-museum'],
  ['Selfie Dolls', 'Have a selfie doll made in your likeness', 'selfie-dolls'],
  ['Pushh', 'Keep track of your fitness selfies', 'pushh'],
  ['Emojiary', 'Tap into your feelings - using emoji', 'emojiary'],
  ['Sock Swag', 'Custom-branded socks for your company', 'sock-swag'],
  ['Ethan', 'A messaging app for messaging Ethan', 'ethan'],
  ['Capsule', 'Text the future', 'capsule'],
  ['Companion', 'Walking home alone is dangerous. Stop doing it alone.', 'companion'],
  ['Push for Pizza', 'The easiest way to order pizza. EVER.', 'push-for-pizza'],
  ['Startup Legitimizer', 'Make your startup appear super legit', 'startup-legitimizer-2'],
  ['Shady URL', "Don't just shorten your URL, make it suspicious and frighten", 'shady-url'],
  ['Geocities-izer', 'Make any site look like a throwback Geocities site', 'geocities-izer-2'],
  ['Somebody', 'Send a message delivered verbally by a stranger', 'somebody'],
  ['Mermur', 'Anonymous text messages. No replies.', 'mermur'],
  ['Lukewarm Emailer', 'Build a list of people on Twitter, reach out w/ a cold email', 'lukewarm-emailer'],
];

(function() {
  $(window).on('resize', function() {
    $('section').height($(window).height());
  }).trigger('resize');

  shuffle(stuff);
  shuffle(stuff); // For good measure
  shuffle(stuff); // Becuase why not?

  // Add in a plug :)
  stuff.splice(7, 0, ['ReadMe.io', 'Beautiful Documentation Made Easy', 'readme-2']);

  var i = 0;
  var next = stuff[i];
  $('.item.current h3').text(next[0]);
  $('.item.current p').text(next[1]);

  var score = (window.localStorage['score'] || 0)*1;
  var total = (window.localStorage['total'] || 0)*1;

  function updateScore() {
    $('.update-score').text(score);
    $('.update-total').text(total);
    $('.update-percent').text(Math.floor((score / total) * 100) + "%");

    window.localStorage['total'] = total;
    window.localStorage['score'] = score;
  };

  $('.button').click(function() {
    var real = next[2];
    var correct = $(this).attr('guess') == (real ? 'real' : 'fake');

    if(real != 'readme-2') {
      total++;
      if(correct) score++;
      updateScore();
    }

    i++;

    if(i >= stuff.length) i = 0;
    next = stuff[i];

    if(!next) {
      console.log('i', i);
    }

    $('.quote').addClass('hide');
    setTimeout(function() {
      $('.quote').remove();
    }, 1000);

    $('.score').addClass('on');
    $('.item.next').addClass('hide');

    $('.item.current').addClass('next').removeClass('current');
    $('.right').removeClass('yes no readme');
    if(real == 'readme-2') {
      $('.right').addClass('readme');
    } else {
      $('.right').addClass(correct ? 'yes' : 'no');
    }

    var text = '';
    if(correct) {
      if(real) {
        text = 'Yup, this is <a href="http://www.producthunt.com/posts/'+real+'" target="_blank">a real product</a>!';
      } else {
        text = 'You spotted the fake!';
      }
    } else {
      if(real) {
        text = 'Actually, it <a href="http://www.producthunt.com/posts/'+real+'" target="_blank">is real</a>!';
      } else {
        text = 'Nope, not real&hellip; yet!';
      }
    }

    if(real == 'readme-2') {
      text = 'Okay, shameless plug&hellip; But <a href="http://www.producthunt.com/posts/'+real+'" target="_blank">check it out</a>!';
    }

    $('.score h4').html(text);

    var clone = function(side) {
      var $el = $('#demo').clone().attr('id', null);
      $('.' + side + ' .items').append($el.addClass('current'));
      $('h3', $el).text(next[0]);
      $('p', $el).text(next[1]);
    };

    clone('left');
    clone('right');

    $('.item.current').show();
    $('.left .item.current').addClass('fadein');
  });

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
})();
