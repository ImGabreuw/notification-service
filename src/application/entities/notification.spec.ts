import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
