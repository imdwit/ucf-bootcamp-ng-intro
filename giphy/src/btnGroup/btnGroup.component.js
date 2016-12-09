var btnGroup = {
  bindings: {
    topics: '<',
  },
  template: `
    <div class="btn-group">
      <a
        class="btn-group__btn"
        ng-repeat="topic in $ctrl.topics track by $index"
        ui-sref="app.gifs({topic: topic})"
        ui-sref-active="link--active"
        >
          {{topic}}
        </a>
    </div>
  `
};

export default btnGroup;