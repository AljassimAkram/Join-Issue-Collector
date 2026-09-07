# Join – AI Issue Collector

Join is a Kanban project management application extended with an
AI-powered Issue Collector using n8n.

Stakeholders can submit feature requests, bugs and technical tasks
by email. Incoming emails are automatically processed and converted
into tickets in the Join Kanban Board.

## Features

- Kanban Board with Triage backlog
- Manual tasks are created in Triage by default
- Email-based Issue Collector
- Gmail integration with n8n
- AI analysis with Google Gemini
- Automatic ticket title generation
- Automatic issue classification
- Automatic priority detection
- Deadline extraction
- AI-generated ticket notice
- Firebase Realtime Database integration
- Stakeholder landing page
- Daily request limit UI
- Responsive desktop and mobile design

## AI Issue Collector Flow

1. A stakeholder sends an email.
2. Gmail triggers the n8n workflow.
3. Sender, subject and email body are extracted.
4. Google Gemini analyzes the request.
5. The AI determines:
   - Title
   - Category
   - Priority
   - Deadline
6. A Join task is generated.
7. The task is stored in Firebase.
8. The new task appears in the Triage column of the Join Board.

## Demo

### Team Member

Open the application and select:

`Member log in`

You can then log in or use the guest login to explore the Join Board.

### Stakeholder

Select:

`Create request`

The Stakeholder page explains how the AI Issue Collector works and
shows the current daily request limit.

Click:

`Create Email Request`

to submit a request by email.

## Ticket Categories

The AI classifies incoming requests as:

- Technical Task
- User Story
- Feature
- Bug Request

## Priority

Possible priority values:

- urgent
- medium
- low

## Technologies

- HTML5
- CSS3
- JavaScript
- Firebase Realtime Database
- n8n
- Gmail API
- Google Gemini API

## Project Structure

```text
Assets/
CSS/
HTML/
JS/
index.html
script.js
README.md
```
## Security

API keys, email credentials, passwords and other sensitive data
must not be committed to this repository.

n8n credentials are stored separately from exported workflow files.

## Author

Akram Al Jassim
