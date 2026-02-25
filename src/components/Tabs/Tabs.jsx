import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabBlock = null;

  tabs.forEach(tab => {
    if (tab.id === activeTabId) {
      tabBlock = (
        <div className="block" data-cy="TabContent">
          {tab.content}
        </div>
      );
    }
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === activeTabId })}
              data-cy="Tab"
              key={`#${tab.id}`}
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabBlock}
    </div>
  );
};
