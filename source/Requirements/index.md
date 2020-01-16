---
title: Requirements
date: 2020-01-14 17:01:55
---

# Requirements

## Project Background

### A Design Problem

Our client laid out the initial problem of employees needing to attend meetings
either by travelling, or to attend remote meeting sessions. Travelling can take
a significant amount of time and thus hinder productivity. Remote meetings are
possible, but they have their own set of problems.

Current remote meeting solutions, such as Skype [1], face the problems including
but not limited to:

- lack of sense of belonging, compromising team-building;
- lack of feeling of participation from attendees;
- remote meeting may become dull if attendees are not able to interact or
  participate; and
- Unreliable cameras and connection.

Our client pointed out that large organizations wish to be able to host
meetings, presentations and discussions that reflect the presence of a
community or a team – to better reflect an organization's culture.

## A Proposed Solution

To address the issues, the client proposed the direction of utilizing Virtual
Reality technology to emulate a meeting environment. The emulated meeting 
environment would allow a meeting's participants (or team members) to:

- create, join and leave a meeting session;
- see each other's avatars;
- be able to perform gestures; and
- watch the presentation be delivered in an emulated environment (such as an
  auditorium or lecture hall).

## Requirements Gathering

To clarify on the requirements of the project, and the practicality and 
effectiveness of the proposed solution, we first met with the client
face-to-face, to:

1. clarify the initial project brief that was given to us;
2. identify possible target VR platforms;
3. inquire about IBM APIs. 

During the meeting, we came to the consensus that emulating the meeting setting
via VR could help to mitigate the design problems by:

- increasing sense of participation from attendees by allowing each attendee to
  adjust his/her viewport, allowing attendees to see avatar representations of
  each other, and to be able to interact with each other via gestures.
- it may be possible for the utilization of more involved VR equipment that
  supports motion tracking to reflect physical movements of the user in the
  emulated setting.
- attendees may be able to interact with the presenter via Q&A, and may be able
  to send direct messages to each other during the meeting session.
- camera is not required as attendees are represented through their avatars.

The project team also proposed the possibility of emulating the physical 
environment to be not limited to conventional meeting locations, but also 
possibly in arbitary settings that is appropriate for the agenda of the meeting
session. Additionally, attendees' representations in the emulated meeting
environment could come with clothing of varying levels of formality that could
contribute towards a more effective meeting.

With respect to possible hardware platforms, our client emphasised that it is
important for the VR equipment to be accessible to the general public. As such,
lower-cost VR equipment such as the Oculus Go [2] or Google Daydream View [3]
would be ideal candidates.

We also proposed initial prioritization of desired features with the client.
We attempted to categorize the feature set into four categories with descending
levels of priority: *must have* features, *should have* features and 
*could have* features, and features that shall not be included as *won't have* 
features. We classified the proposed features with a MoSCoW list [4], then
we sent the MoSCoW list to the client so the client could confirm that the
project team's prioritization aligns with that of the client.

### MoSCoW List

The MoSCoW list is derived for a Minimum Viable Product (MVP), corresponding
to prototype 1. The presenter hosts the meeting and attendees listen to the
presenter; they are referred to as "participants" collectively.

#### Must Have Requirements

1. The meeting presenter must be able to initiate a meeting session, attendees 
   must be able to join the meeting session and all participants must be able to
   leave the session.
2. A simple round table meeting must be emulated.
    
    - Must be able to host a small group meeting.
    - The presenter shall stand in the center.
    - Attendees are fixed to their seats and cannot move out of their seats.

3. Attendees must be able to see presentation slides.
4. Participants must be represented by avatars.

    - The avatar helps participants to determine and distinguish each other's
      identities.

5. Each participant must be labelled by a name tag.
6. Each participant shall have a speaking indication which helps other 
   participants to determine the participant speaking.
7. Real-time communication.

    - Each participant must be able to speak to each other.
    - Each participant must be able to mute himself/herself.

8. TODO


#### Should Have Requirements

#### Could Have Requirements

#### Won't Have Requirements

## References

[1] <https://www.skype.com/en/>
[2] <https://www.oculus.com/go/?locale=en_GB>
[3] <https://arvr.google.com/daydream/>
[4] Clegg, Dai; Barker, Richard (1994). *Case Method Fast-Track: A RAD Approach*. 
    Addison-Wesley. ISBN 978-0-201-62432-8.
