### metaroom-markup
A markup language that builds virtual reality webpage like html.

How do you represent `<table>` in virtual reality? a 3d table.
How about `<thead>`? A label on the side of the 3d table.

canvas -> webGL

svg -> x3d

html -> ?

``` html
<meta-verse skybox=''>
  <meta-room width='300px' height='600px'>
    <meta-wall align='left'>
      <poster src='VRcollab.png'></poster>
    </meta-wall>
    <meta-wall align='right'></meta-wall>

    <meta-wall align='front'></meta-wall>
    <meta-wall align='back'></meta-wall>

    <meta-wall align='ceiling'></meta-wall>

    <meta-floor>
      <meta-table>
        <meta-thead>Contact US</thead>

        <meta-tbody>
          <meta-tr>
            <meta-td>
              <meta-item src='phone.obj' alt='call us by +6598144461' pickup='true'></meta-item>
            </meta-td>
          </meta-tr>
        </meta-tbody>

      </meta-table>

      <meta-table>
        <meta-thead>Achievements</meta-thead>
        <meta-tbody>
          <meta-tr>
            <meta-td>
              <meta-item src='best-game-ever-trophy.obj' alt='this is a trophy won by us on 2013' pickup='true'></meta-item>
            </meta-td>
          </meta-tr>
        </meta-tbody>
      </meta-table>
    </meta-floor>

  </meta-room>
</meta-verse>
```

### disclaimer
I am still prototyping this. The code might stinks

### Roadmap
- add test to all the elements
- add css to change the shader. We should support glsify
- add functional modelling for table and use css to change the arguments
- tab to change the position and look at of the user just like tabindex
- How do we do website scrolling in VR or 3D? There should be a path in the meta-room follows all the tabindex, meta-link and meta-item

### run the build
`gulp`
