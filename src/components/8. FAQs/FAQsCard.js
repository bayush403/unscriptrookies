import React from "react";
import "../8. FAQs/FAQs.styles.css";

export const FAQsCard = () => (
  <>
    <section class="accordion">
      <input type="checkbox" name="collapse" id="handle1" />
      <h2 class="handle">
        <label for="handle1">What is a Hackathon ?</label>
      </h2>
      <div class="content">
        <p className="para">
          A hackathon is an event where in participating teams are provided
          different real-life problems and they have to design a technological
          solution to anyone of the problems given in the given time limit. The
          final product developed should be usable in real life.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle2" />
      <h2 class="handle">
        <label for="handle2">Can I code before coming to the hackathon ?</label>
      </h2>
      <div class="content">
        <p className="para">
          You can come prepared with half baked codes, write your own APIs and
          modules.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle3" />
      <h2 class="handle">
        <label for="handle3">How do I form teams ?</label>
      </h2>
      <div class="content">
        <p className="para">
          Each team should comprise of a maximum of 4 members & minimum of 2
          members including the team leader. Team members can be from different
          colleges.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse3" id="handle4" />
      <h2 class="handle">
        <label for="handle4">How do I register for Unscript 2k23 ?</label>
      </h2>
      <div class="content">
        <p className="para">
          All team members need to register on Devfolio (Link mentioned at the
          top)
          <div className="iframe-container centervideo">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/miYVtosLzQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse4" id="handle5" />
      <h2 class="handle">
        <label for="handle5">
          What if I have never been to a hackathon before ?
        </label>
      </h2>
      <div class="content">
        <p className="para">
          For beginners, it will be a great start for working on problem
          statements where mentors will be there to help you out with your
          projects. So, there is nothing to worry about any errors while you
          work. You will also have a good exposure to a coding atmosphere.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse6" id="handle7" />
      <h2 class="handle">
        <label for="handle7">
          Is the event going to be online or offline?
        </label>
      </h2>
      <div class="content">
        <p className="para">The hackathon will be completely online</p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse5" id="handle6" />
      <h2 class="handle">
        <label for="handle6">
          When will the problem statements be released?
        </label>
      </h2>
      <div class="content">
        <p className="para">
          Problem statements will be released 1 day prior to the main event.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse7" id="handle8" />
      <h2 class="handle">
        <label for="handle8">
          How will we be notified about the selection?
        </label>
      </h2>
      <div class="content">
        <p className="para">
          Selected teams will be notified on Devfolio as well as get a
          confirmation email. Note: Registration does not confirm selection
        </p>
      </div>
    </section>
  </>
);
