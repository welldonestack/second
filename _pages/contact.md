---
layout: contact
title: "Contact"
permalink: "/contact.html"
image: "/assets/images/Page/Contact/PublicDomain-Activity-HorseRiding-02.jpg"
#image1: /path/to/image1.jpg
#image2: /path/to/image2.jpg
#image3: /path/to/image3.jpg
#image4: /path/to/image4.jpg
#image1_caption: "Image 1 caption"
#image2_caption: "Image 2 caption"
#image3_caption: "Image 3 caption"
#visit: "https://example.com"
---



<br>
Please send your message to {{site.name}}. 
<br>We will reply as soon as possible!


<form action="https://formspree.io/{{site.email}}" method="POST">    

    <div class="form-group row">
    <div class="col-md-6">
    <input class="form-control" type="text" name="name" placeholder="Name" required>
    </div>
    <div class="col-md-6">
    <input class="form-control" type="email" name="_replyto" placeholder="E-mail Address" required>
    </div>
    </div>
    <textarea rows="6" class="form-control mb-3" name="message" placeholder="Message" required></textarea>    
    <input class="btn btn-trans" type="submit" value="send">
</form>
