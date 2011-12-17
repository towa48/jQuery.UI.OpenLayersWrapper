<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    OpenLayers Map
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>OpenLayers Map</h2>
    <div id="map-wrapper" class="ui-map-wrapper"></div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeaderContent" runat="server">
    <link href="<%: Url.Content("~/Content/themes/base/jquery-ui.css") %>" rel="stylesheet" type="text/css" media="all" />
    <link href="<%: Url.Content("~/Content/themes/map-default/style.tidy.css") %>" rel="stylesheet" type="text/css" media="all" />
    <script src="<%: Url.Content("~/Scripts/jquery-ui-1.8.16.min.js") %>" type="text/javascript"></script>
    <script src="<%: Url.Content("~/Scripts/OpenLayers-2.11.min.js") %>" type="text/javascript"></script>
    <script src="<%: Url.Content("~/Scripts/25-jquery.ui.openMap.src.js") %>" type="text/javascript"></script>
    <style type="text/css">
        .ui-map-wrapper {
            height: 400px;
            background-color: #ccc
        }
    </style>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            $('#map-wrapper').openMap({
                name: 'mymap',
                imgPath: '/Content/images/map-dark/'
            });
        });
    </script>
</asp:Content>
